import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Typography from '@material-ui/core/Typography';


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

const BusinessAndCommunication = () => {
    const classes = useStyles();
    const [features, setfeatures] = useState({
        Internet: false,
        Cable_TV: false,
        Intercom: false,
        Wifi: false,
        CCTV_Camera: false,
    });
    const { Internet, Cable_TV, Intercom, Wifi, CCTV_Camera } = features

    const handleChange = (event) => {
        setfeatures({ ...features, [event.target.name]: event.target.checked });
    };
    return (
        <>
            <div className={classes.MainContainer}>
                <h4 className={classes.subHeading}>BUSINESS AND COMMUNICATION</h4>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Internet} onChange={handleChange} name='Internet' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Internet</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Cable_TV} onChange={handleChange} name='Cable_TV' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Cable TV</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Intercom} onChange={handleChange} name='Intercom' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Intercom</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={Wifi} onChange={handleChange} name='Wifi' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Wifi</Typography>}
                        />
                    </Grid>
                    <Grid item xs={6} sm={6} md={4} lg={3}>
                        <FormControlLabel
                            control={<Checkbox checked={CCTV_Camera} onChange={handleChange} name='CCTV_Camera' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                            label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>CCTV Camera</Typography>}
                        />
                    </Grid>
                </Grid>
            </div>
        </>
    );
}
export default React.memo(BusinessAndCommunication);