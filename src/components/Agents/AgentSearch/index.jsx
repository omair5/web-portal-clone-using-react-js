import React, { useState, useEffect } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import UseStyles from '../../Explore/ExploreSearch/SearchStyles'
import { useSelector } from 'react-redux'
import HomeGetLocations from '../../../Services/HomeGetLocations';
import Select from 'react-select';
import { colourStyles } from '../../Home/Tabs/ColourStyles'
import GetAgentName from '../../../Services/GetAgentNames';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const AgentSearch = () => {
    const classes = UseStyles();
    const dispatch = useDispatch()
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const [selectedCity, setselectedCity] = useState('')
    const [cityLocations, setcityLocations] = useState([])
    const [searchData, setsearchData] = useState({ location: '', agency: '' })
    const [agentName, setagentName] = useState([])

    // const options = [
    //     { value: 'chocolate', label: 'Chocolate' },
    //     { value: 'strawberry', label: 'Strawberry' },
    //     { value: 'vanilla', label: 'Vanilla' },
    // ];

    // Fetching Agents Name
    useEffect(() => {
        (async () => {
            setagentName(await GetAgentName())
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
        setsearchData({ ...searchData, [e.name]: selectedOption })
    }

    const handleResetFilter = () => {
        setselectedCity('')
        setsearchData({ location: '', agency: '' })
    }

    const handleSearchSubmit = () => {
        const formData = {
            city: selectedCity.value,
            location: searchData.location.value,
            agency_name: searchData.agency.value,
        }
        console.log('this is form data', formData)
        axios.post('http://localhost:3200/agent/serch_agent', formData).then(
            response => {
                console.log('this is search response of agents', response)
                if (response.status === 201) {
                    if ((response.data.length === 0) || response.data === '') {
                        dispatch({ type: 'AgentSearchToggle', payload: false })
                        dispatch({ type: 'AgentCardToggle', payload: true })
                        dispatch({ type: 'clear_agent_list' })
                        dispatch({ type: 'set_agent_list', payload: JSON.parse(localStorage.getItem("agent_card_data")) })
                    }
                    else {
                        dispatch({ type: 'AgentSearchToggle', payload: false })
                        dispatch({ type: 'AgentCardToggle', payload: true })
                        dispatch({ type: 'clear_agent_list' })
                        dispatch({ type: 'set_agent_list', payload: response.data })
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

            {/*Agency Name*/}
            <div className={classes.childContainer}>
                <p className={classes.paraStyle}>Agency Name</p>
                <Select
                    value={searchData.agency}
                    onChange={HandleSearchData}
                    isLoading={agentName.length === 0 && true}
                    // isClearable={true}
                    isSearchable={true}
                    name="agency"
                    options={agentName}
                    placeholder="Agency Name"
                    label='Agent Name'
                    styles={colourStyles}
                    components={{
                        IndicatorSeparator: () => null
                    }}
                />
            </div>

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
export default React.memo(AgentSearch)