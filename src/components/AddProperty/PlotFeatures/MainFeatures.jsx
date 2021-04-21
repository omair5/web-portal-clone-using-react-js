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

const MainFeatures = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const features = useSelector(state => state.Plot_Main_Features)
    const { Possession, Corner, Park_Facing, Boundary_Wall, Extra_Land, Main_Boulevard, File } = features

    const handleChange = (event) => {
        dispatch({ type: 'set_plot_main_features', payload: { name: event.target.name, checked: event.target.checked } })
    };
    console.log('from plot', features)
    return (
        <>
            <div className={classes.MainContainer}>
                <h4 className={classes.subHeading}>MAIN FEATURES</h4>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Possession} onChange={handleChange} name='Possession' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Possession</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Corner} onChange={handleChange} name='Corner' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Corner</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Park_Facing} onChange={handleChange} name='Park_Facing' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Park Facing</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Boundary_Wall} onChange={handleChange} name='Boundary_Wall' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Boundary Wall</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Extra_Land} onChange={handleChange} name='Extra_Land' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Extra Land</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Main_Boulevard} onChange={handleChange} name='Main_Boulevard' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Main Boulevard</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={File} onChange={handleChange} name='File' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>File</Typography>}
                        />
                    </Grid>
                </Grid>

            </div>
        </>
    );
}
export default React.memo(MainFeatures);