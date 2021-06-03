import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import RangeBox from '../../FrequentlyUsed/RangeBox';
import Select from 'react-select';
import FooterButtons from '../../Home/Tabs/FooterButtons';
import { beds } from '../../Home/Tabs/SelectDropDownValues'
import { useSelector, useDispatch } from 'react-redux'
import UseStyles from './SearchStyles'
// THIS WILL USED IN REACT-SELECT
import { colourStyles } from '../../Home/Tabs/ColourStyles'
import { PropertyTypeOptions, formatGroupLabel } from '../../Home/Tabs/SelectGroupStyles'
import HomeGetLocations from '../../../Services/HomeGetLocations';
import axios from 'axios';


const ExploreSearchWanted = () => {
    const dispatch = useDispatch()
    const classes = UseStyles();
    const areaUnit = useSelector(state => state.Home_AreaUnit)
    const area_min_range = useSelector(state => state.Home_Area_min_range)
    const area_max_range = useSelector(state => state.Home_Area_max_range)
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
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

        return () => mounted = false
    }, [])

    // TO CLEAR PREVIOUS VALUES FROM OTHER COMPONENTS
    useEffect(() => {
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
        dispatch({ type: 'clear_explore_wanted_properties' })
        dispatch({ type: 'show_wanted_properties_skeleton' })
        const search_data = {
            purpose: 'Wanted',
            city_name: selectedCity.value,
            location_name: SelectedLocation.value,
            property_type: SelectedPropertyType.value,
            min_area: minArea,
            max_area: maxArea,
            beds: SelectedBed.value
        }
        dispatch({ type: 'set_explore_wanted_tab_pagination', payload: search_data })
        axios.post('http://localhost:3200/addproperty/getpropertydata', search_data).then(response => {
            if (response.data.items.length !== 0) {
                const wanted_properties_data = response.data.items.map((value) => {
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
                    }
                })
                dispatch({ type: 'hide_wanted_properties_skeleton' })
                dispatch({ type: 'wanted_listings_are_found_hide_message' })
                dispatch({ type: 'explore_wanted_properties', payload: { property_data: wanted_properties_data, meta: response.data.meta }})
            }
            else {
                dispatch({ type: 'hide_wanted_properties_skeleton' })
                dispatch({ type: 'no_wanted_listings_are_found_show_message' })
            }

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div className={classes.mainContainer}>
            {/* CITY */}
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
                    isClearable={true}
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

            {/* AREA UNIT */}
            <div className={classes.childContainer}>
                <RangeBox
                    RangeMin={area_min_range}
                    RangeMax={area_max_range}
                    heading='Area'
                    unit={areaUnit}
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

            {/*  SEARCH BUTTON   */}

            <div className={classes.searchButtonBox} onClick={HandleSubmit} >
                <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                <div className={classes.search}>SEARCH</div>
            </div>


            {/* change area unit and reset buttons */}
            <FooterButtons />
        </div >
    );
}

export default React.memo(ExploreSearchWanted);