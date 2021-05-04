import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    MainContainer: {
        margin: '25px 0px'
    },
    subHeading: {
        color: 'rgb(76, 84, 85)',
        padding: '15px 0px',
        letterSpacing: '1px'
    },
    check: {
        color: '#fcb812'
    }
}));

const MainFeatures = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const features = useSelector(state => state.Home_Main_Features)
    const { Dining_Room, Drawing_Room, Store_Room, Tv_Lounge, Balcony, Lawn, Laundry_Room, Study_Room, Powder_Room, Prayer_Room, Kitchen, Dirty_Kitchen, Central_Cooling, Central_Heating, Servant_Quarter, Furnished, Swimmimg_Pool, Security_Staff, Elavator, Gym, Maintenance_Staff } = features

    const handleChange = (event) => {
        dispatch({ type: 'set_home_main_features', payload: { name: event.target.name, checked: event.target.checked } })
    };
    return (
        <>
            <div className={classes.MainContainer}>
                <h4 className={classes.subHeading}>MAIN FEATURES</h4>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Dining_Room} onChange={handleChange} name='Dining_Room' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Dining Room</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Drawing_Room} onChange={handleChange} name='Drawing_Room' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Drawing Room</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Store_Room} onChange={handleChange} name='Store_Room' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Store Room</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Tv_Lounge} onChange={handleChange} name='Tv_Lounge' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Tv Lounge</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Balcony} onChange={handleChange} name='Balcony' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Balcony</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Lawn} onChange={handleChange} name='Lawn' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Lawn</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Laundry_Room} onChange={handleChange} name='Laundry_Room' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Laundry Room</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Study_Room} onChange={handleChange} name='Study_Room' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Study Room</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Powder_Room} onChange={handleChange} name='Powder_Room' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Powder Room</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Prayer_Room} onChange={handleChange} name='Prayer_Room' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Prayer Room</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Kitchen} onChange={handleChange} name='Kitchen' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Kitchen</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Dirty_Kitchen} onChange={handleChange} name='Dirty_Kitchen' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Dirty Kitchen</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Central_Cooling} onChange={handleChange} name='Central_Cooling' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Central Cooling</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Central_Heating} onChange={handleChange} name='Central_Heating' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Central Heating</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Servant_Quarter} onChange={handleChange} name='Servant_Quarter' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Servant Quarter</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Furnished} onChange={handleChange} name='Furnished' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Furnished</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Swimmimg_Pool} onChange={handleChange} name='Swimmimg_Pool' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Swimmimg Pool</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Security_Staff} onChange={handleChange} name='Security_Staff' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Security Staff</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Elavator} onChange={handleChange} name='Elavator' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Elavator</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Gym} onChange={handleChange} name='Gym' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Gym</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Maintenance_Staff} onChange={handleChange} name='Maintenance_Staff' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Maintenance Staff</Typography>}
                        />
                    </Grid>
                </Grid>

            </div>
        </>
    );
}
export default React.memo(MainFeatures);