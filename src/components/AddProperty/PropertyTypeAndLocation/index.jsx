import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import Homes from './Homes';
import Plots from './Plots';
import Commercial from './Commercial';
import Select from 'react-select';
import { colourStyles } from './ColourStyles'

const useStyles = makeStyles((theme) => ({
    radio: {
        "& svg": {
            fontSize: '23px'
        },
        '&$checked': {
            color: 'rgb(59, 70, 86)'
        }
    },
    checked: {},
    RadioLabel: {
        fontSize: '17px',
        "& svg": {
            fontSize: '20px'
        }
    },
    mainHeading: {
        backgroundColor: 'rgb(76, 84, 85)',
        color: 'white',
        padding: '10px',
        margin: '30px 0px'
    },
    mainContainer: {
        margin: '10px auto'
    },
    horizontalRow: {
        margin: '15px 0px',
        "& p": {
            color: '#fcb812',
            fontWeight: 'bolder',
            fontSize: '15px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
        }
    },
    cityAndLocation: {
        margin: '15px 0px',
        "& p": {
            color: '#fcb812',
            fontWeight: 'bolder',
            fontSize: '15px',
            textTransform: 'uppercase',
            paddingBottom: '10px',
            letterSpacing: '1px'
        }
    }
}));

const PropertyTypeAndLocation = () => {
    const classes = useStyles();
    const [propertyDetails, setpropertyDetails] = useState({ purpose: '', propertyType: '' })

    const HandleChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setpropertyDetails({ ...propertyDetails, [e.target.name]: e.target.value })
    }

    console.log(propertyDetails)



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
                            <RadioGroup aria-label="purpose" name="purpose" row >
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
                            // value={selectedCity}
                            // onChange={HandleCitySelect}
                            // isLoading={cities_options_list.length === 0 && true}
                            isSearchable={false}
                            // name="city"
                            // options={cities_options_list}
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
                            // value={selectedCity}
                            // onChange={HandleCitySelect}
                            // isLoading={cities_options_list.length === 0 && true}
                            isSearchable={false}
                            isDisabled={true}
                            // name="city"
                            // options={cities_options_list}
                            placeholder="Select Location"
                            label='city'
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
export default PropertyTypeAndLocation;