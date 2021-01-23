import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCompass } from '@fortawesome/free-solid-svg-icons'
import { faChrome, faFirefox, faSafari, faOpera } from "@fortawesome/free-brands-svg-icons"

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

const TopBrowsers = () => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <div className={classes.iconContainer}>
                    <div className={classes.deviceIcon}>
                        <FontAwesomeIcon icon={faCompass} />
                    </div>
                    <h5>Top Browsers</h5>
                </div>

                <div className={classes.infoContainer}>
                    <div className={classes.childContainer}>
                        <FontAwesomeIcon icon={faChrome} className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Desktop</span> (157,520 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FontAwesomeIcon icon={faFirefox} className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Mobile</span> (9,339 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FontAwesomeIcon icon={faSafari} className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Mobile</span> (9,339 views)</p>
                    </div>
                    <div className={classes.childContainer}>
                        <FontAwesomeIcon icon={faOpera} className={classes.icon} />
                        <p><span style={{ fontWeight: 'bolder' }}>Mobile</span> (9,339 views)</p>
                    </div>
                </div>
            </Paper>
        </>
    );
}
export default React.memo(TopBrowsers);