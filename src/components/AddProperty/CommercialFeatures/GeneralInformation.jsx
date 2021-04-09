import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputTextField from '../../FrequentlyUsed/InputTextField'
import Grid from '@material-ui/core/Grid';
import { colourStyles } from '../HomeFeatures/ColourStyles'
import Select from 'react-select';

const flooring = [
    { label: 'Tiles', value: 'Tiles' },
    { label: 'Marble', value: 'Marble' },
    { label: 'Wooden', value: 'Wooden' },
    { label: 'Chip', value: 'Chip' },
    { label: 'Cement', value: 'Cement' },
    { label: 'Other', value: 'Other' },
]
const electricity_backup = [
    { label: 'None', value: 'None' },
    { label: 'Generator', value: 'Generator' },
    { label: 'UPS', value: 'UPS' },
    { label: 'Solar', value: 'Solar' },
    { label: 'Other', value: 'Other' },
]



const useStyles = makeStyles((theme) => ({
    MainContainer: {
        margin: '25px 0px'
    },
    subHeading: {
        color: '#fcb812',
        padding: '15px 0px',
        letterSpacing: '1px'
    },

}));


const GeneralInformation = () => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.MainContainer}>
                <h4 className={classes.subHeading}>GENERAL INFORMATION</h4>
                <Grid container spacing={3}>
                    {/* BUILT IN YEAR */}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            TextFieldId='1'
                            TextFieldPlaceHolder='BUILT IN YEAR'
                            InputType='number'
                            name='year'
                            outlined="outlined"
                        />
                    </Grid>
                    {/* NO OF ROOMS*/}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            TextFieldId='2'
                            TextFieldPlaceHolder='NO OF ROOMS'
                            InputType='number'
                            name='bedrooms'
                            outlined="outlined"
                        />
                    </Grid>
                    {/* TOTAL PARKING SPACE */}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            TextFieldId='4'
                            TextFieldPlaceHolder='TOTAL PARKING SPACE'
                            InputType='number'
                            name='parking'
                            outlined="outlined"
                        />
                    </Grid>
                    {/* FLOORS */}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            TextFieldId='5'
                            TextFieldPlaceHolder='FLOORS'
                            InputType='number'
                            name='floors'
                            outlined="outlined"
                        />
                    </Grid>
                    {/* FLOORING */}
                    <Grid item xs={6} sm={6} md={3}>
                        <Select
                            // value={selectedCity}
                            // onChange={HandleCitySelect}
                            isSearchable={false}
                            options={flooring}
                            placeholder="FLOORING"
                            styles={colourStyles}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                        />
                    </Grid>
                    {/* ELECTRICITY BACKUP */}
                    <Grid item xs={6} sm={6} md={3}>
                        <Select
                            // value={selectedCity}
                            // onChange={HandleCitySelect}
                            isSearchable={false}
                            options={electricity_backup}
                            placeholder="ELECTRICTY BACKUP"
                            styles={colourStyles}
                            components={{
                                IndicatorSeparator: () => null
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
export default React.memo(GeneralInformation);