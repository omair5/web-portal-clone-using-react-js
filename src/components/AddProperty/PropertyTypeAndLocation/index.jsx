import React, { useEffect, useState } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import Homes from './Homes';
import Plots from './Plots';
import Commercial from './Commercial';
import Select from 'react-select';
import { colourStyles } from './ColourStyles'
import { useSelector, useDispatch } from 'react-redux'
import HomeGetLocations from '../../../Services/HomeGetLocations';
import { UseStyles } from './mainStyles'

const PropertyTypeAndLocation = () => {
    console.log('property type and location')
    const classes = UseStyles();
    const dispatch = useDispatch()
    // GETTING STATES FROM REDUX STORE
    const cities_options_list = useSelector(state => state.Home_cities_Reducer)
    const propertyDetails = useSelector(state => state.PropertyDetails)
    const selectedCity = useSelector(state => state.AddProperty_Selected_City)
    const SelectedLocation = useSelector(state => state.AddProperty_Selected_Country)
    // LOCAL STATES
    const [cityLocations, setcityLocations] = useState([])


    // HANDLING PURPOSE ,PROPERTY TYPE & WANTED TYPE
    const HandleChange = (e) => {
        dispatch({ type: 'set_property_details', payload: { name: e.target.name, value: e.target.value } })
    }

    // THIS CALLBACK WILL BE FIRED WHEN USER SELECTS A CITY
    const HandleCitySelect = (selectedOption) => {
        dispatch({ type: 'add_property_selected_city', payload: selectedOption })
        setcityLocations([])
        dispatch({ type: 'add_property_clear_selected_country' })
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

    // HANDLING LOCATION CHANGE
    const HandleLocationSelect = (selectedOption) => {
        dispatch({ type: 'add_property_selected_country', payload: selectedOption })
    }

    // CLEARING WANTED TYPE IF WANTED IS NOT SELECTED
    useEffect(() => {
        if (propertyDetails.propertyType !== 'wanted') {
            propertyDetails.wantedType = ''
        }
    }, [propertyDetails])

    return (
        <>
            <h4 className={classes.mainHeading}>PROPERTY TYPE AND LOCATION</h4>
            <Container maxWidth='sm' className={classes.mainContainer}>
                <div>
                    {/* PURPOSE */}
                    <div className={classes.horizontalRow}>
                        <p>Purpose</p>
                        <RadioGroup aria-label="purpose" name="purpose" row onChange={HandleChange} >
                            <FormControlLabel
                                value="sale"
                                control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                label="For Sale"
                                classes={{
                                    label: classes.RadioLabel
                                }} />

                            <FormControlLabel
                                value="rent"
                                control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                label="Rent"
                                classes={{
                                    label: classes.RadioLabel
                                }} />

                            <FormControlLabel
                                value="wanted"
                                control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                label="Wanted"
                                classes={{
                                    label: classes.RadioLabel
                                }} />
                        </RadioGroup>
                    </div>

                    {/* WANTED FOR */}
                    {propertyDetails.purpose === 'wanted' ?
                        <div className={classes.horizontalRow}>
                            <p>Wanted For</p>
                            <RadioGroup aria-label="purpose" name="wantedType" onChange={HandleChange} row >
                                <FormControlLabel
                                    value="Buy"
                                    control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                    label="Buy"
                                    classes={{
                                        label: classes.RadioLabel
                                    }} />

                                <FormControlLabel
                                    value="Rent"
                                    control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                    label="Rent"
                                    classes={{
                                        label: classes.RadioLabel
                                    }} />
                            </RadioGroup>
                        </div> : null
                    }


                    {/* PROPERTY TYPE */}
                    <div className={classes.horizontalRow}>
                        <p>PROPERTY TYPE</p>
                        <RadioGroup aria-label="PROPERTY TYPE" name="propertyType" row onChange={HandleChange}>
                            <FormControlLabel
                                value="Homes"
                                control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                label="Homes"
                                classes={{
                                    label: classes.RadioLabel
                                }} />

                            <FormControlLabel
                                value="Plots"
                                control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                label="Plots"
                                classes={{
                                    label: classes.RadioLabel
                                }} />

                            <FormControlLabel
                                value="Commercial"
                                control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                                label="Commercial"
                                classes={{
                                    label: classes.RadioLabel
                                }} />
                        </RadioGroup>
                    </div>

                    {/* HOMES */}
                    {propertyDetails.propertyType === 'Homes' ?
                        <div className={classes.horizontalRow}>
                            <Homes />
                        </div> : null
                    }


                    {/* PLOTS */}
                    {propertyDetails.propertyType === 'Plots' ?
                        <div className={classes.horizontalRow}>
                            <Plots />
                        </div> : null
                    }

                    {/* COMMERCIAL */}
                    {propertyDetails.propertyType === 'Commercial' ?
                        <div className={classes.horizontalRow}>
                            <Commercial />
                        </div> : null
                    }

                    {/* SELECT CITY */}
                    <div className={classes.cityAndLocation}>
                        <p>CITY </p>
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

                    {/* SELECT LOCATION */}
                    <div className={classes.cityAndLocation}>
                        <p>LOCATION </p>
                        <Select
                            value={SelectedLocation}
                            onChange={HandleLocationSelect}
                            isSearchable={true}
                            isDisabled={selectedCity === '' ? true : false}
                            options={cityLocations}
                            placeholder="Select Location"
                            label='location'
                            styles={colourStyles}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                        />
                    </div>
                </div>
            </Container>
        </>
    );
}
export default React.memo(PropertyTypeAndLocation);