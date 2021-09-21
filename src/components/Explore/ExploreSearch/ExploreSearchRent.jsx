import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import RangeBox from '../../FrequentlyUsed/RangeBox';
import AreaRangeBox from '../../FrequentlyUsed/AreaRangeBox';
import Select from 'react-select';
import { useSelector, useDispatch } from 'react-redux'
import FooterButtons from '../../Home/Tabs/FooterButtons';
import { beds, rent_price_range_min, rent_price_range_max } from '../../Home/Tabs/SelectDropDownValues'
import HomeGetLocations from '../../../Services/HomeGetLocations';
import UseStyles from './SearchStyles'
// THIS WILL USED IN REACT-SELECT
import { colourStyles } from '../../Home/Tabs/ColourStyles'
import { PropertyTypeOptions, formatGroupLabel } from '../../Home/Tabs/SelectGroupStyles'
import axios from 'axios';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';



const ExploreSearchRent = () => {
    const dispatch = useDispatch()
    const classes = UseStyles();
    const areaUnit = useSelector(state => state.Home_AreaUnit)
    const area_min_range = useSelector(state => state.Home_Area_min_range)
    const area_max_range = useSelector(state => state.Home_Area_max_range)
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const minPrice = useSelector(state => state.FrequentlyUsed_Min_Price_Range)
    const maxPrice = useSelector(state => state.FrequentlyUsed_Max_Price_Range)
    const minArea = useSelector(state => state.FrequentlyUsed_Min_Area_Range)
    const maxArea = useSelector(state => state.FrequentlyUsed_Max_Area_Range)
    const [cityLocations, setcityLocations] = useState([])
    const [selectedCity, setselectedCity] = useState({ label: "Karachi", value: 'Karachi' })
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
        // cancel subscription to useEffect
        return () => mounted = false;
    }, [])

    // TO CLEAR PREVIOUS VALUES FROM OTHER COMPONENTS
    useEffect(() => {
        dispatch({ type: 'clear_min_value_of_price' })
        dispatch({ type: 'clear_max_value_of_price' })
        dispatch({ type: 'clear_min_value_of_area' })
        dispatch({ type: 'clear_max_value_of_area' })
    }, [dispatch])


    // CALLBACK FUNCTIION TO HANDLE CITY CHANGE
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
        dispatch({ type: 'clear_explore_Rent_properties' })
        dispatch({ type: 'show_rent_properties_skeleton' })
        dispatch({ type: 'do_not_run_useeffect_on_mount_for_rent_tab' })
        const search_data = {
            purpose: 'Rent',
            city_name: selectedCity.value,
            location_name: SelectedLocation.value,
            property_type: SelectedPropertyType.value,
            min_price: minPrice,
            max_price: maxPrice,
            min_area: minArea,
            max_area: maxArea,
            beds: SelectedBed.value
        }
        dispatch({ type: 'set_explore_rent_tab_pagination', payload: search_data })
        axios.post('http://localhost:3200/addproperty/getpropertydata', search_data).then(response => {
            console.log('LOOKING AT YOU BABY', response)

            if (response.data === '') {
                dispatch({ type: 'searchToggle', payload: false })
                dispatch({ type: 'cardToggle', payload: true })
                dispatch({ type: 'hide_rent_properties_skeleton' })
                dispatch({ type: 'no_rent_listings_are_found_show_message' })
                dispatch({ type: 'run_useeffect_on_mount_for_rent_tab' })

            }
            else if (response.data.items.length === 0) {
                dispatch({ type: 'searchToggle', payload: false })
                dispatch({ type: 'cardToggle', payload: true })
                dispatch({ type: 'hide_rent_properties_skeleton' })
                dispatch({ type: 'no_rent_listings_are_found_show_message' })
                dispatch({ type: 'run_useeffect_on_mount_for_rent_tab' })

            }
            else {
                const rent_properties_data = response.data.items.map((value) => {
                    return {
                        city: value.city.city_name,
                        building_name: value.property_title,
                        location: value.Location.location_name,
                        area_size: value.land_area,
                        area_unit: value.area_unit.area_name,
                        beds: `${value.general_info.length !== 0 ? value.general_info[0].bedrooms : 'donotshowbeds'}`,
                        bathrooms: `${value.general_info.length !== 0 ? value.general_info[0].bathrooms : 'donotshowbaths'}`,
                        price: value.price,
                        cover_image: value.title_image,
                        property_sub_type: value.property_category.property_category_name,
                        propertyId: value.id,
                    }
                })
                dispatch({ type: 'do_not_run_useeffect_on_mount_for_rent_tab' })
                dispatch({ type: 'searchToggle', payload: false })
                dispatch({ type: 'cardToggle', payload: true })
                dispatch({ type: 'hide_rent_properties_skeleton' })
                dispatch({ type: 'rent_listings_are_found_hide_message' })
                dispatch({ type: 'explore_rent_properties', payload: { property_data: rent_properties_data, meta: response.data.meta } })
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const handleResetFilter = () => {
        setselectedCity({ label: "Karachi", value: 'Karachi' })
        setSelectedLocation('')
        setSelectedPropertyType('')
        setSelectedBed('')
        dispatch({ type: 'clear_max_value_of_area' })
        dispatch({ type: 'clear_max_value_of_price' })
        dispatch({ type: 'clear_min_value_of_area' })
        dispatch({ type: 'clear_min_value_of_price' })
    }


    return (
        <>
            <div className={classes.mainContainer}>
                {/*CITY*/}
                <div className={classes.childContainer}>
                    <p className={classes.paraStyle}>City</p>
                    <Select
                        value={selectedCity}
                        onChange={HandleCitySelect}
                        isLoading={cities_options_list.length === 0 && true}
                        isSearchable={false}
                        options={cities_options_list}
                        placeholder="Select City"
                        label='city'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </div>

                {/* LOCATION */}
                <div className={classes.childContainer}>
                    <p className={classes.paraStyle}>Location</p>
                    <Select
                        value={SelectedLocation}
                        onChange={HandleLocationSelect}
                        isLoading={cityLocations.length === 0 && true}
                        // isClearable={true}
                        isSearchable={true}
                        options={cityLocations}
                        placeholder="Select Location"
                        label='Location'
                        styles={colourStyles}
                        components={{
                            IndicatorSeparator: () => null
                        }}
                    />
                </div>

                {/*PROPERTY TYPE */}
                <div className={classes.childContainer}>
                    <p className={classes.paraStyle}>Property Type</p>
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
                </div>

                {/* Area Unit */}
                <div className={classes.childContainer}>
                    <AreaRangeBox
                        RangeMin={area_min_range}
                        RangeMax={area_max_range}
                        heading='Area'
                        unit={areaUnit}
                    />
                </div>

                {/* BEDS */}
                <div className={classes.childContainer}>
                    <p className={classes.paraStyle}>Beds</p>
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
                </div>

                {/* PRICE RANGE SELECTOR */}
                <div className={classes.childContainer}>
                    <RangeBox
                        RangeMin={rent_price_range_min}
                        RangeMax={rent_price_range_max}
                        heading='Price Range (PKR)'
                    />
                </div>

                {/* SEARCH BUTTON  */}
                <div className={classes.searchButtonBox} onClick={HandleSubmit} >
                    <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                    <div className={classes.search}>SEARCH</div>
                </div>
                <div className={classes.searchButtonBox} onClick={handleResetFilter}>
                    <div><RotateLeftIcon style={{ fontSize: '25px' }} /></div>
                    <div className={classes.search}>RESET FILTER</div>
                </div>

                {/* change area unit and reset buttons */}
                <FooterButtons />

            </div>
        </>
    );
}

export default React.memo(ExploreSearchRent);