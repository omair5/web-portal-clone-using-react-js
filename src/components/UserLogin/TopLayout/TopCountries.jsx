import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import FlagIcon from '@material-ui/icons/Flag';

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

const TopCountries = () => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <div className={classes.iconContainer}>
                    <div className={classes.deviceIcon}>
                        <FlagIcon />
                    </div>
                    <h5>Top Countries</h5>
                </div>

                <div className={classes.infoContainer}>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>United States</span> (128,422 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Germany </span>  (17,902 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Canada </span> (14,183 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Singapore </span>  (4,315 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Ukraine </span>  (1,016 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>France </span> (9,339 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>United Kingdom</span> (936 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Norway </span> (656 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Pakistan </span> (235 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Netherlands </span> (136 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FlagIcon className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Hungary </span> (9,339 views)</p>
                    </div>
                </div>
            </Paper>
        </>
    );
}
export default React.memo(TopCountries);