import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Views from './Views';

const useStyles = makeStyles({
    paper: {
        maxWidth: '95%',
        height: 'auto',
        margin: '20px auto'
    },
    iconContainer: {
        display: 'flex',
        "& h5": {
            display: 'flex',
            alignItems: 'center'
        }
    },
    eyeIcon: {
        fontSize: '20px',
        color: 'white',
        backgroundColor: '#fcb812',
        height: '30px',
        minWidth: '35px',
        textAlign: 'center',
        margin: '15px 10px',
        borderRadius: "50%"
    },
    HourlyViewsContainer: {
        display: "flex",
        justifyContent: 'space-around',
        textAlign: 'center',
        marginTop: '10px'
    },
});

const ViewsLayout = ({mainHeading}) => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <div className={classes.iconContainer}>
                    <div className={classes.eyeIcon}>
                        <FontAwesomeIcon icon={faEye} />
                    </div>
                    <h5>{mainHeading}</h5>
                </div>

                <div className={classes.HourlyViewsContainer}>
                    <Views
                        totalViews='2,737'
                        timePeriod='Last 24 hours'
                    />
                    <Views
                        totalViews='21,828'
                        timePeriod='Last 7 days'
                    />
                    <Views
                        totalViews='79,298'
                        timePeriod='Last 30 days'
                    />
                </div>
            </Paper>
        </>
    );
}
export default React.memo(ViewsLayout);