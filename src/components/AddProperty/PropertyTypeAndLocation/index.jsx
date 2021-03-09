import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Homes from './Homes';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useBaseStyles = makeStyles({
    root: {
        "& .MuiFilledInput-underline:before": {
            borderBottom: '2px solid #fcb812'
        }
    }
});

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
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        margin: '10px 0px'
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
    formControl: {
        width: '100%',
        margin: '10px 0px'
    },
    inputLabel: {
        color: '#fcb812',
        fontWeight: 'bolder',
        fontSize: '15px',
        textTransform: 'uppercase',
        "&$inputFocused": {
            color: "#fcb812"
        }
    },
    inputFocused: {}

}));

const PropertyTypeAndLocation = () => {
    const classes = useStyles();
    const baseClasses = useBaseStyles()
    // ------------------- STATES
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });
    // ------------------- HANDLE CALLBACK

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };

    return (
        <>
            <h4 className={classes.mainHeading}>PROPERTY TYPE AND LOCATION</h4>
            {/* PURPOSE */}
            <div className={classes.mainContainer}>
                <div>
                    <div className={classes.horizontalRow}>
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
                    </div>

                    {/* PROPERTY TYPE */}
                    <div className={classes.horizontalRow}>
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
                    {/* <Homes /> */}


                    {/* SELECT CITY */}
                    <FormControl required variant="filled" className={classes.formControl} classes={baseClasses}>
                        <InputLabel htmlFor="filled-age-native-simple"
                            className={classes.inputLabel}
                            classes={{ focused: classes.inputFocused }}>
                            CITY
                        </InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'filled-age-native-simple',
                                style: {
                                    color: "rgb(59, 70, 86)",
                                    fontSize: '12px',
                                }
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>

                    {/* SELECT LOCATION */}
                    <FormControl required disabled variant="filled" className={classes.formControl} classes={baseClasses}>
                        <InputLabel htmlFor="filled-age-native-simple"
                            className={classes.inputLabel}
                            classes={{ focused: classes.inputFocused }}>
                            LOCATION
                        </InputLabel>
                        <Select
                            native
                            value={state.age}
                            onChange={handleChange}
                            inputProps={{
                                name: 'age',
                                id: 'filled-age-native-simple',
                                style: {
                                    color: "rgb(59, 70, 86)",
                                    fontSize: '12px',
                                }
                            }}
                        >
                            <option value={10}>Ten</option>
                            <option value={20}>Twenty</option>
                            <option value={30}>Thirty</option>
                        </Select>
                        <FormHelperText>Required</FormHelperText>
                    </FormControl>
                </div>

            </div>
        </>
    );
}

export default PropertyTypeAndLocation;