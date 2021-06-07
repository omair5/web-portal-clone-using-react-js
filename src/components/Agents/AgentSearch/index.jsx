import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import UseStyles from '../../Explore/ExploreSearch/SearchStyles'
import { useSelector } from 'react-redux'
import HomeGetLocations from '../../../Services/HomeGetLocations';
import Select from 'react-select';
import { colourStyles } from '../../Home/Tabs/ColourStyles'

const AgentSearch = () => {
    const classes = UseStyles();
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const [selectedCity, setselectedCity] = useState({ label: "Karachi", value: 'Karachi' })
    const [cityLocations, setcityLocations] = useState([])
    const [searchData, setsearchData] = useState({ location: '', agency: '' })

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
        setsearchData({ ...searchData, agency: '' })
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

    const HandleSubmit = () => {
        const fromData = {
            city: selectedCity.value,
            location: searchData.location,
            agency_name: searchData.agency,
        }
        console.log(fromData)
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
                    value={searchData.location}
                    onChange={HandleSearchData}
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

            {/*Agency Name*/}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Agency Name</p>
                <Select
                    value={searchData.agency}
                    onChange={HandleSearchData}
                    isLoading={cityLocations.length === 0 && true}
                    isClearable={true}
                    isSearchable={true}
                    name="agency"
                    options={options}
                    placeholder="Agency Name"
                    label='Agency Name'
                    styles={colourStyles}
                    components={{
                        IndicatorSeparator: () => null
                    }}
                />
            </div>

            {/* SEARCH BUTTON  */}
            <div className={classes.searchButtonBox} onClick={HandleSubmit}>
                <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                <div className={classes.search}>SEARCH</div>
            </div>
        </div >
    );
}

export default React.memo(AgentSearch)