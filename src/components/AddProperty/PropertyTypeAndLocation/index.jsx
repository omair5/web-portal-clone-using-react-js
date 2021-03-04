import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Homes from './Homes';

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
        backgroundColor: '#fcb812',
        padding: '10px'
    },
    purposeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '10px 0px'
    },

}));

const PropertyTypeAndLocation = () => {
    const classes = useStyles();

    return (
        <>
            <h4 className={classes.mainHeading}>PROPERTY TYPE AND LOCATION</h4>
            {/* PURPOSE */}
            <div className={classes.purposeContainer}>
                <p>Purpose * :</p>
                <RadioGroup aria-label="purpose" name="purpose" row className={classes.RadioGroup}>
                    <FormControlLabel
                        value="For Sale"
                        control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                        label="For Sale"
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

                    <FormControlLabel
                        value="Wanted"
                        control={<Radio classes={{ root: classes.radio, checked: classes.checked }} />}
                        label="Wanted"
                        classes={{
                            label: classes.RadioLabel
                        }} />
                </RadioGroup>
            </div>

            {/* WANTED FOR */}
            <div className={classes.purposeContainer}>
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
            </div>

            {/* PROPERTY TYPE */}
            <div className={classes.purposeContainer}>
                <p>PROPERTY TYPE* :</p>
                <RadioGroup aria-label="PROPERTY TYPE" name="PROPERTY TYPE" row className={classes.RadioGroup}>
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
            <Homes />
        </>
    );
}

export default PropertyTypeAndLocation;