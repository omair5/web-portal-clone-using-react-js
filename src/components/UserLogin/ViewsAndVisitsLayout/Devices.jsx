import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import DevicesIcon from '@material-ui/icons/Devices';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

const useStyles = makeStyles({
    paper: {
        maxWidth: '95%',
        height: 'auto',
        margin: '10px auto'
    },
    iconContainer: {
        display: 'flex',
        "& h5": {
            display: 'flex',
            alignItems: 'center'
        }
    },
    deviceIcon: {
        fontSize: '20px',
        color: 'white',
        backgroundColor: '#fcb812',
        height: '30px',
        minWidth: '35px',
        textAlign: 'center',
        margin: '15px 10px',
        borderRadius: "50%"
    },
    infoContainer: {
        marginTop: '10px'
    },
    childContainer: {
        display: 'flex',
        padding: '10px 0px'
    },
    icon: {
        fontSize: '25px',
        margin: '0px 10px',
        color: 'silver'
    }
});

const Devices = () => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <div className={classes.iconContainer}>
                    <div className={classes.deviceIcon}>
                        <DevicesIcon />
                    </div>
                    <h5>Devices</h5>
                </div>

                <div className={classes.infoContainer}>
                    <div className={classes.childContainer}>
                        <DesktopWindowsIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Desktop</span> (157,520 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <PhoneAndroidIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Mobile</span> (9,339 views)</p>
                    </div>
                </div>
            </Paper>
        </>
    );
}
export default React.memo(Devices);