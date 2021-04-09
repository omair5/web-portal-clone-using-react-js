import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import RangeBox from '../../FrequentlyUsed/RangeBox';
import AreaRangeBox from '../../FrequentlyUsed/AreaRangeBox';
import Select from 'react-select';
import { useSelector } from 'react-redux'
import { beds, buy_price_range_min, buy_price_range_max } from '../../Home/Tabs/SelectDropDownValues'
import HomeGetLocations from '../../../Services/HomeGetLocations';
import UseStyles from './SearchStyles'
// THIS WILL USED IN REACT-SELECT
import { colourStyles } from '../../Home/Tabs/ColourStyles'
import { PropertyTypeOptions, formatGroupLabel } from '../../Home/Tabs/SelectGroupStyles'


const ExploreSearchs = () => {
    const classes = UseStyles();
    const areaUnit = useSelector(state => state.Home_AreaUnit)
    const area_min_range = useSelector(state => state.Home_Area_min_range)
    const area_max_range = useSelector(state => state.Home_Area_max_range)
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const [selectedCity, setselectedCity] = useState({ label: "Karachi", value: 'Karachi' })
    const [cityLocations, setcityLocations] = useState([])
    // const minPrice = useSelector(state => state.FrequentlyUsed_Min_Price_Range)
    // const maxPrice = useSelector(state => state.FrequentlyUsed_Max_Price_Range)
    // const minArea = useSelector(state => state.FrequentlyUsed_Min_Area_Range)
    // const maxArea = useSelector(state => state.FrequentlyUsed_Max_Area_Range)
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
        GetLocationsHome()

        return () => mounted = false
    }, [])

    // callback function to handle city change
    const HandleCitySelect = (selectedOption) => {
        setselectedCity(selectedOption)
        setcityLocations([])
        const city_whose_location_to_be_fetched = selectedOption.value
        async function GetLocationsFromHome() {
            const locations_options = []
            const locations = await HomeGetLocations(city_whose_location_to_be_fetched)
            locations.map(value => (
                locations_options.push({ label: value, value: value })
            ))
            setcityLocations(locations_options)
        }
        GetLocationsFromHome()
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

    return (
        <div className={classes.mainContainer}>
            {/*CITY*/}
            <div className={classes.childContainer}>
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
            </div>

            {/* LOCATION */}
            <div className={classes.childContainer}>
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
            </div>

            {/* PROPERTY TYPE */}
            <div className={classes.childContainer}>
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
                    RangeMin={buy_price_range_min}
                    RangeMax={buy_price_range_max}
                    heading='Price Range (PKR)'
                />
            </div>

            {/* SEARCH BUTTON  */}
            <div className={classes.searchButtonBox} >
                <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                <div className={classes.search}>SEARCH</div>
            </div>
        </div >
    );
}
export default React.memo(ExploreSearchs);
