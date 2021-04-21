import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputTextField from '../../FrequentlyUsed/InputTextField'
import Grid from '@material-ui/core/Grid';
import { colourStyles } from './ColourStyles'
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';

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
        color: 'rgb(76, 84, 85)',
        padding: '15px 0px',
        letterSpacing: '1px'
    },

}));


const GeneralInformation = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    // USING STATES FROM REDUX STORE
    const generalInfoInputs = useSelector(state => state.Home_General_Info_Inputs)
    const { year, bedrooms, bathrooms, parking, floors } = generalInfoInputs
    const selectedFloor = useSelector(state => state.Home_Flooring)
    const selectedBackup = useSelector(state => state.Home_Backup)


    // HANDLE CALLBACKS
    const HandleInputChange = (e) => {
        if (isNaN(e.target.value)) {
            return
        }
        else {
            dispatch({ type: 'set_home_general_info_inputs', payload: { name: e.target.name, value: e.target.value } })
        }
    }

    const HandleFloorSelect = (selectedOption) => {
        dispatch({ type: 'set_home_flooring', payload: selectedOption })
    }
    const HandleBackupSelect = (selectedOption) => {
        dispatch({ type: 'set_home_backup', payload: selectedOption })
    }

    return (
        <>
            <div className={classes.MainContainer}>
                <h4 className={classes.subHeading}>GENERAL INFORMATION</h4>
                <Grid container spacing={3}>
                    {/* BUILT IN YEAR */}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            value={year}
                            TextFieldId='1'
                            TextFieldPlaceHolder='BUILT IN YEAR'
                            InputType='tel'
                            name='year'
                            outlined="outlined"
                            callBack={HandleInputChange}
                            maxlength={4}
                        />
                    </Grid>
                    {/* NO OF BEDROOMS*/}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            value={bedrooms}
                            TextFieldId='2'
                            TextFieldPlaceHolder='NO OF BEDROOMS'
                            InputType='tel'
                            name='bedrooms'
                            outlined="outlined"
                            callBack={HandleInputChange}
                            maxlength={4}
                        />
                    </Grid>
                    {/* NO OF BATHROOMS */}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            value={bathrooms}
                            TextFieldId='3'
                            TextFieldPlaceHolder='NO OF BATHROOMS'
                            InputType='tel'
                            name='bathrooms'
                            outlined="outlined"
                            callBack={HandleInputChange}
                            maxlength={4}
                        />
                    </Grid>
                    {/* TOTAL PARKING SPACE */}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            value={parking}
                            TextFieldId='4'
                            TextFieldPlaceHolder='TOTAL PARKING SPACE'
                            InputType='tel'
                            name='parking'
                            outlined="outlined"
                            callBack={HandleInputChange}
                            maxlength={4}
                        />
                    </Grid>
                    {/* FLOORS */}
                    <Grid item xs={6} sm={6} md={3}>
                        <InputTextField
                            value={floors}
                            TextFieldId='5'
                            TextFieldPlaceHolder='FLOORS'
                            InputType='tel'
                            name='floors'
                            outlined="outlined"
                            callBack={HandleInputChange}
                            maxlength={2}
                        />
                    </Grid>
                    {/* FLOORING */}
                    <Grid item xs={6} sm={6} md={3}>
                        <Select
                            value={selectedFloor}
                            onChange={HandleFloorSelect}
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
                            value={selectedBackup}
                            onChange={HandleBackupSelect}
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