import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import UseStyles from '../../Explore/ExploreSearch/SearchStyles'
import { useSelector } from 'react-redux'
import HomeGetLocations from '../../../Services/HomeGetLocations';
import Select from 'react-select';
import { colourStyles } from '../../Home/Tabs/ColourStyles'
// import { PropertyTypeOptions, formatGroupLabel } from '../../Home/Tabs/SelectGroupStyles'
import HomeFetchDeveloperName from '../../../Services/HomeFetchDeveloperName'
import axios from 'axios';
import { useDispatch } from 'react-redux';


const DeveloperSearch = () => {
    const classes = UseStyles();
    const dispatch = useDispatch()
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const [selectedCity, setselectedCity] = useState('')
    const [cityLocations, setcityLocations] = useState([])
    // const [SelectedLocation, setSelectedLocation] = useState('')
    const [searchData, setsearchData] = useState({ DeveloperName: '', location: '' })
    const [developerNameList, setdeveloperNameList] = useState([])

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    // ];

    // Fetching Developer Name
    useEffect(() => {
        (async () => {
            if (localStorage.getItem("developer_names")) {
                setdeveloperNameList(JSON.parse(localStorage.getItem("developer_names")))
            }
            else {
                const response = await HomeFetchDeveloperName()
                setdeveloperNameList(response)
                localStorage.setItem("developer_names", JSON.stringify(response));
            }
        }
        )()
    }, [])

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
        setsearchData({ ...searchData, location: '' })
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
        console.log(selectedOption)
        setsearchData({ ...searchData, [e.name]: selectedOption })
    }

    const handleResetFilter = () => {
        setselectedCity('')
        setsearchData({ DeveloperName: '', location: '' })
    }

    const handleSearchSubmit = () => {
        const formData = {
            city: selectedCity.value,
            location: searchData.location.value,
            developer_name: searchData.DeveloperName.value,
        }
        console.log('this is form data', formData)
        axios.post('http://localhost:3200/developer/serch_developer', formData).then(
            response => {
                console.log('this is search response of developers', response)
                if (response.status === 201) {
                    if ((response.data.length === 0) || response.data === '') {
                        dispatch({ type: 'DeveloperSearchToggle', payload: false })
                        dispatch({ type: 'DeveloperCardToggle', payload: true })
                        dispatch({ type: 'clear_developer_list' })
                        dispatch({ type: 'set_developer_list', payload: JSON.parse(localStorage.getItem("developers_card_data")) })
                    }
                    else {
                        dispatch({ type: 'DeveloperSearchToggle', payload: false })
                        dispatch({ type: 'DeveloperCardToggle', payload: true })
                        dispatch({ type: 'clear_developer_list' })
                        dispatch({ type: 'set_developer_list', payload: response.data })
                    }
                }
                else {
                    console.log('sorry something went wrong')
                }
            }
        ).catch(err => console.log(err))
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
                    // isClearable={true}
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
                    isLoading={developerNameList.length === 0 && true}
                    // isClearable={true}
                    isSearchable={true}
                    name="DeveloperName"
                    options={developerNameList}
                    placeholder="Developer Name"
                    label='Developer Name'
                    styles={colourStyles}
                    components={{
                        IndicatorSeparator: () => null
                    }}
                />
            </div>

            {/* Property Types */}
            {/* <div className={classes.childContainer}>
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
            </div> */}

            {/* SEARCH BUTTON  */}
            <div className={classes.searchButtonBox} onClick={handleSearchSubmit}>
                <div><SearchIcon style={{ fontSize: '25px' }} /></div>
                <div className={classes.search}>SEARCH</div>
            </div>

            <div className={classes.searchButtonBox} onClick={handleResetFilter}>
                <div><RotateLeftIcon style={{ fontSize: '25px' }} /></div>
                <div className={classes.search}>RESET FILTER</div>
            </div>
        </div >
    );
}
export default React.memo(DeveloperSearch)