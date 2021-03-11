import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Container from '@material-ui/core/Container';
import Homes from './Homes';
import Plots from './Plots';
import Commercial from './Commercial';

const useStyles = makeStyles((theme) => ({
    radio: {
        '&$checked': {
            color: 'rgb(59, 70, 86)'
        }
    },
    checkboxLabel: {
        fontSize: 40
    },
    checked: {},
    RadioGroup: {
        marginLeft: '20px'
    },
    RadioLabel: {
        fontSize: '17px',
        "& svg": {
            fontSize: '20px'
        }
    },
    mainHeading: {
        backgroundColor: 'rgb(59, 70, 86)',
        color: 'white',
        padding: '10px'
    },
    mainContainer: {
        margin: '10px auto'
    },
    horizontalRow: {
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        margin: '15px 0px',
        "& p": {
            color: '#fcb812',
            fontWeight: 'bolder',
            fontSize: '15px',
            textTransform: 'uppercase'
        }
    },
    wrapperContainer: {
        "& p": {
            color: '#fcb812',
            fontWeight: 'bolder',
            fontSize: '15px',
            textTransform: 'uppercase'
        }
    },
    landAreaContainer: {
        margin: '10px 0px',
        width: '100%',
        padding: '13px 2px',
        borderColor: 'silver',
        borderRadius: '5px',
        "&:focus": {
            outline: 'none'
        },
    },
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
            {/* PURPOSE */}
            <Container maxWidth='sm' className={classes.mainContainer}>
                <div>
                    <div className={classes.horizontalRow}>
                        <p>Purpose * :</p>
                        <RadioGroup aria-label="purpose" name="purpose" row className={classes.RadioGroup} onChange={HandleChange}>
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
                            <p>Wanted For :</p>
                            <RadioGroup aria-label="purpose" name="purpose" row className={classes.RadioGroup}>
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
                        <p>PROPERTY TYPE* :</p>
                        <RadioGroup aria-label="PROPERTY TYPE" name="propertyType" row className={classes.RadioGroup} onChange={HandleChange}>
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
                    <div className={classes.wrapperContainer}>
                        <p>CITY *</p>
                        <select name="city" id="city" className={classes.landAreaContainer}>
                            <option value="Square Feet">Select City</option>
                            <option value="Square Yards">Square Yards</option>
                            <option value="Square Meters">Square Meters</option>
                            <option value="Marla">Marla</option>
                            <option value="Kanal">Kanal</option>
                        </select>
                    </div>

                    {/* SELECT LOCATION */}
                    <div className={classes.wrapperContainer}>
                        <p>LOCATION *</p>
                        <select name="location" id="location" disabled className={classes.landAreaContainer}>
                            <option value="Square Feet">Gulshan-e-Iqbal</option>
                            <option value="Square Yards">Square Yards</option>
                            <option value="Square Meters">Square Meters</option>
                            <option value="Marla">Marla</option>
                            <option value="Kanal">Kanal</option>
                        </select>
                    </div>
                </div>
            </Container>
        </>
    );
}
export default PropertyTypeAndLocation;