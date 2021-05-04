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
        color: 'rgb(76, 84, 85)',
        padding: '15px 0px',
        letterSpacing: '1px'
    },
    check: {
        color: '#fcb812'
    }
}));

const Utilities = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const features = useSelector(state => state.Home_utilities)
    const { Electricity, Gas, Water, Maintenance, Sewerage } = features

    const handleChange = (event) => {
        dispatch({ type: 'set_Home_utilities', payload: { name: event.target.name, checked: event.target.checked } })
    };
    return (
        <>
            <div className={classes.MainContainer}>
                <h4 className={classes.subHeading}>UTILITIES</h4>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Electricity} onChange={handleChange} name='Electricity' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Electricity</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Gas} onChange={handleChange} name='Gas' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Gas</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Water} onChange={handleChange} name='Water' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Water</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Maintenance} onChange={handleChange} name='Maintenance' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Maintenance</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Sewerage} onChange={handleChange} name='Sewerage' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Sewerage</Typography>}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
export default React.memo(Utilities);