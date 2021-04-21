import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Typography from '@material-ui/core/Typography';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
    MainContainer: {
        margin: '25px 0px'
    },
    subHeading: {
        color: '#fcb812',
        padding: '15px 0px',
        letterSpacing: '1px'
    },
    check: {
        color: '#fcb812'
    }
}));

const FACING = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const features = useSelector(state => state.Home_Facing)
    const { North, North_West, North_East, South, South_West, South_East, East, West } = features

    const handleChange = (event) => {
        dispatch({ type: 'set_home_facing', payload: { name: event.target.name, checked: event.target.checked } })
    };
    console.log(features)
    return (
        <>
            <div className={classes.MainContainer}>
                <h4 className={classes.subHeading}>FACING</h4>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={North} onChange={handleChange} name='North' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>North</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={North_West} onChange={handleChange} name='North_West' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>North West</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={North_East} onChange={handleChange} name='North_East' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>North East</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={South} onChange={handleChange} name='South' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>South</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={South_West} onChange={handleChange} name='South_West' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>South West</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={South_East} onChange={handleChange} name='South_East' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>South East</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={East} onChange={handleChange} name='East' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>East</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={West} onChange={handleChange} name='West' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>West</Typography>}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
export default React.memo(FACING);