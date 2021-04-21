import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import styles from './buy.module.css'
import RangeBox from '../../../FrequentlyUsed/RangeBox';
import AreaRangeBox from '../../../FrequentlyUsed/AreaRangeBox';
import Select from 'react-select';
import FooterButtons from '../FooterButtons';
import { useSelector, useDispatch } from 'react-redux'
import { beds, buy_price_range_min, buy_price_range_max } from '../SelectDropDownValues'
// THIS WILL USED IN REACT-SELECT
import { colourStyles } from '../ColourStyles'
import { PropertyTypeOptions, formatGroupLabel } from '../SelectGroupStyles'
import HomeGetLocations from '../../../../Services/HomeGetLocations';
import axios from 'axios';
import { useHistory } from 'react-router-dom'

const Buy = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const areaUnit = useSelector(state => state.Home_AreaUnit)
    const area_min_range = useSelector(state => state.Home_Area_min_range)
    const area_max_range = useSelector(state => state.Home_Area_max_range)
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const [selectedCity, setselectedCity] = useState({ label: "Karachi", value: 'Karachi' })
    const [cityLocations, setcityLocations] = useState([])
    const minPrice = useSelector(state => state.FrequentlyUsed_Min_Price_Range)
    const maxPrice = useSelector(state => state.FrequentlyUsed_Max_Price_Range)
    const minArea = useSelector(state => state.FrequentlyUsed_Min_Area_Range)
    const maxArea = useSelector(state => state.FrequentlyUsed_Max_Area_Range)
    const [SelectedLocation, setSelectedLocation] = useState('')
    const [SelectedPropertyType, setSelectedPropertyType] = useState('')
    const [SelectedBed, setSelectedBed] = useState('')

    // FETCHING KARACHI LOCATION API
    useEffect(() => {
        let mounted = true
        async function GetLocationsHome() {
            const locations_options = []
            const location = await HomeGetLocations()
            location.map(value => (
                locations_options.push({ label: value, value: value })
            ))
            if (mounted) {
                setcityLocations(locations_options)
            }
        }
        GetLocationsHome().catch(err => console.log(err))
        return () => mounted = false
    }, [])

    // TO CLEAR PREVIOUS VALUES FROM OTHER COMPONENTS
    useEffect(() => {
        dispatch({ type: 'clear_min_value_of_price' })
        dispatch({ type: 'clear_max_value_of_price' })
        dispatch({ type: 'clear_min_value_of_area' })
        dispatch({ type: 'clear_max_value_of_area' })
    }, [dispatch])

    // callback function to handle city change
    const HandleCitySelect = (selectedOption) => {
        setselectedCity(selectedOption)
        setcityLocations([])
        setSelectedLocation('')
        const city_whose_location_to_be_fetched = selectedOption.value
        async function GetLocationsFromHome() {
            const locations_options = []
            const locations = await HomeGetLocations(city_whose_location_to_be_fetched)
            locations.map(value => (
                locations_options.push({ label: value, value: value })
            ))
            setcityLocations(locations_options)
        }
        GetLocationsFromHome().catch(err => console.log(err))

        if (selectedOption.value !== 'Karachi') {
            dispatch({ type: 'change_to_MARLA' })
            dispatch({ type: 'marla_min_range' })
            dispatch({ type: 'marla_max_range' })
        }
    }

    const HandleLocationSelect = (e) => {
        setSelectedLocation(e)
    }
    const HandlePropertyType = (e) => {
        setSelectedPropertyType(e)
    }
    const HandleBeds = (e) => {
        setSelectedBed(e)
    }

    const HandleSubmit = () => {
        history.push('/explore')
        dispatch({ type: 'set_current_tab_to_buy' })
        dispatch({ type: '0' })
        dispatch({ type: 'clear_explore_buy_properties' })
        dispatch({ type: 'show_buy_properties_skeleton' })
        const search_data = {
            purpose: 'Buy',
            city_name: selectedCity.value,
            location_name: SelectedLocation.value,
            property_type: SelectedPropertyType.value,
            min_price: minPrice,
            max_price: maxPrice,
            min_area: minArea,
            max_area: maxArea,
            beds: SelectedBed.value
        }
        console.log(search_data)
        axios.post('http://localhost:3200/addproperty/getpropertydata', search_data).then(response => {
            if (response.data.length !== 0) {
                const buy_properties_data = response.data.map((value) => {
                    return {
                        city: value.city.city_name,
                        building_name: value.property_title,
                        location: value.Location.location_name,
                        area_size: value.land_area,
                        area_unit: value.area_unit.area_name,
                        beds: value.bed.beds_quantity,
                        price: value.price,
                        cover_image: value.title_image,
                    }
                })
                dispatch({ type: 'hide_buy_properties_skeleton' })
                dispatch({ type: 'buy_listings_are_found_hide_message' })
                dispatch({ type: 'explore_buy_properties', payload: buy_properties_data })
            }
            else {
                dispatch({ type: 'hide_buy_properties_skeleton' })
                dispatch({ type: 'no_buy_listings_are_found_show_message' })
            }

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            {/* THIS IS ROW 1 */}
            <Grid container >
                {/* CITY */}
                <Grid item xs={12} md={3} className={`${styles.childContainer} ${styles.marginBottomMobile}`} >
                    <p>City</p>
                    <Select
                        value={selectedCity}
                        onChange={HandleCitySelect}
                        isLoading={cities_options_list.length === 0 && true}
                        isSearchable={false}
                        name="city"
                        options={cities_options_list}
                        placeholder="Select City"
                        label='city'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/* LOCATION */}
                <Grid item xs={12} md={6} className={`${styles.locationSelect} ${styles.childContainer} ${styles.marginBottomMobile}`}>
                    <p>Location</p>
                    <Select
                        value={SelectedLocation}
                        onChange={HandleLocationSelect}
                        isLoading={cityLocations.length === 0 && true}
                        isClearable={true}
                        isSearchable={true}
                        name="location"
                        options={cityLocations}
                        placeholder="Select Location"
                        label='Location'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/*PROPERTY TYPE */}
                <Grid item xs={12} md={3} className={`${styles.childContainer} ${styles.marginBottomMobile}`}>
                    <p>Property Type</p>
                    <Select
                        value={SelectedPropertyType}
                        onChange={HandlePropertyType}
                        isLoading={false}
                        isSearchable={false}
                        name="property type"
                        placeholder="Select Property Type"
                        label='Property Type'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                        options={PropertyTypeOptions}
                        formatGroupLabel={formatGroupLabel}
                    />
                </Grid>
            </Grid>

            {/* THIS IS ROW 2 */}
            <Grid container className={`${styles.secondGrid} ${styles.marginBottomMobile}`} >
                {/* PRICE RANGE BOX */}
                <Grid item xs={12} md={3} >
                    <RangeBox
                        RangeMin={buy_price_range_min}
                        RangeMax={buy_price_range_max}
                        heading='Price Range (PKR)'
                    />
                </Grid >

                {/* AREA UNIT */}
                <Grid item xs={12} md={3} className={`${styles.gridtwoPadding} ${styles.locationSelect} ${styles.marginBottomMobile}`}  >
                    <AreaRangeBox
                        RangeMin={area_min_range}
                        RangeMax={area_max_range}
                        heading='Area'
                        unit={areaUnit}
                    />
                </Grid >

                {/* BEDS */}
                <Grid item xs={12} md={3} className={`${styles.childContainer} ${styles.marginBottomMobile}`} style={{ marginTop: 'auto', marginBottom: '4px' }}>
                    <p>Beds</p>
                    <Select
                        value={SelectedBed}
                        onChange={HandleBeds}
                        isLoading={false}
                        isSearchable={false}
                        name="beds"
                        options={beds}
                        placeholder="Select Beds"
                        label='Beds'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </Grid>

                {/*  SEARCH BUTTON   */}
                <Grid item xs={12} md={3} className={styles.buttonContainer} >
                    <div className={styles.searchButtonBox} onClick={HandleSubmit}>
                        <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                        <div className={styles.search}>SEARCH</div>
                    </div>
                </Grid>
            </Grid >

            {/* change area unit and reset buttons */}
            <FooterButtons />

        </div >
    );
}
export default React.memo(Buy);