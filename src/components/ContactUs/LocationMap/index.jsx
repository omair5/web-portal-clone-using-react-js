import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        height: '300px',
        margin: '10px auto',
    }
}));

const LocationMap = () => {
    // LOGIC
    const classes = useStyles();
    // USER INTERFACE
    return (
        <>
            <div className={classes.mainContainer}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7237.217715803584!2d67.08709601543055!3d24.911320193700085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe69072fad2f50aca!2sABAADEE.COM!5e0!3m2!1sen!2s!4v1606989692512!5m2!1sen!2s"
                    width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="abaadee map"></iframe>
            </div>
        </>
    );
}

export default LocationMap;