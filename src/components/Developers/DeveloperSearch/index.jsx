import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import UseStyles from '../../Explore/ExploreSearch/SearchStyles'
import { useSelector } from 'react-redux'
import HomeGetLocations from '../../../Services/HomeGetLocations';
import Select from 'react-select';
import { colourStyles } from '../../Home/Tabs/ColourStyles'
import { PropertyTypeOptions, formatGroupLabel } from '../../Home/Tabs/SelectGroupStyles'


const DeveloperSearch = () => {
    const classes = UseStyles();
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const [selectedCity, setselectedCity] = useState({ label: "Karachi", value: 'Karachi' })
    const [cityLocations, setcityLocations] = useState([])
    const [SelectedLocation, setSelectedLocation] = useState('')
    const [searchData, setsearchData] = useState({ DeveloperName: '', propertytype: '' })

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' },
    ];

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

    }

    const HandleSearchData = (selectedOption, e) => {
        setsearchData({ ...searchData, [e.name]: selectedOption.value })
    }

    const handleSubmit = () => {
        const formData = {
            city: selectedCity.value,
            location: SelectedLocation,
            developer_name: searchData.DeveloperName,
            property_type: searchData.propertytype,
        }
        console.log(formData)
    }

    return (
        <div className={classes.mainContainer}>
            {/*CITY  */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>City</p>
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
                <p className={classes.paraStyle}>Location</p>
                <Select
                    value={SelectedLocation}
                    // onChange={HandleLocationSelect}
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

            {/*Developer Name  */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Developer Name</p>
                <Select
                    value={searchData.DeveloperName}
                    onChange={HandleSearchData}
                    isLoading={cityLocations.length === 0 && true}
                    isClearable={true}
                    isSearchable={true}
                    name="DeveloperName"
                    options={options}
                    placeholder="Developer Name"
                    label='Developer Name'
                    styles={colourStyles}
                    components={{
                        IndicatorSeparator: () => null
                    }}
                />
            </div>

            {/* Property Types */}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Property Type</p>
                <Select
                    value={searchData.propertytype}
                    onChange={HandleSearchData}
                    isLoading={false}
                    isSearchable={false}
                    name="propertytype"
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

            {/* SEARCH BUTTON  */}
            <div className={classes.searchButtonBox} onClick={handleSubmit}>
                <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                <div className={classes.search}>SEARCH</div>
            </div>
        </div >
    );
}

export default React.memo(DeveloperSearch)