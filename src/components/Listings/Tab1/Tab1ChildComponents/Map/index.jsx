import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
const useStyles = makeStyles(theme => ({
    paper: {
        overflow: 'hidden',
        margin: '3vh 0px'
    },
    MainContainer: {
        margin: '15px auto'
    },
    icon: {
        fontSize: '20px',
        color: '#fcb812'
    },
    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        "& p": {
            marginLeft: '10px',
            fontWeight: 'bolder'
        }
    },
    mapContainer: {
        marginTop: '10px',
        height: '300px',
    }
}));

const Map = () => {
    const classes = useStyles();

    return (
        <>
            <Paper className={classes.paper}>
                <Container maxWidth="lg" className={classes.MainContainer} >
                    <div className={classes.iconContainer}>
                        <LocationOnOutlinedIcon className={classes.icon} />
                        <p>Location</p>
                    </div>
                    <div className={classes.mapContainer}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14474.424015025836!2d67.087611!3d24.9114175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe69072fad2f50aca!2sABAADEE.COM!5e0!3m2!1sen!2s!4v1612170467440!5m2!1sen!2s" width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" title="abaadee map" />
                    </div>
                </Container>
            </Paper>
        </>
    );
}

export default React.memo(Map);