import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
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
    paraContainer: {
        marginTop: '10px',
        "& p": {
            padding: '5px 0px'
        }
    }
}));

const PropertyDetails = () => {
    const classes = useStyles();

    return (
        <>
            <Paper style={{ overflow: 'hidden' }}>
                <Container maxWidth="lg" className={classes.MainContainer} >
                    <div className={classes.iconContainer}>
                        <MenuIcon className={classes.icon} />
                        <p>Property Details</p>
                    </div>
                    <div className={classes.paraContainer}>
                        <p>AL RAUF CASTLE .</p>
                        <p>UNIT # A-102 1ST FLOOR.</p>
                        <p>ADDRESS: JAMSHAD ROAD NEAR BLUE RIBBON BAKERY.</p>
                        <p>PROJECT BY AL RAUF GROUP.</p>
                    </div>
                </Container>
            </Paper>
        </>
    );
}

export default React.memo(PropertyDetails);