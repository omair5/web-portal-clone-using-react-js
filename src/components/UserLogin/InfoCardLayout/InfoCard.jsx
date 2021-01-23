import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const useStyles = makeStyles({
    box: {
        backgroundColor: '#fcb812',
        maxWidth: '90%',
        height: '120px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
    },
    boxChild1: {
        flexBasis: '60%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color: 'white'
    },
    boxChild2: {
        flexBasis: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    fontStyle: {
        fontSize: '50px',
        color: 'gray',
        opacity: '0.3'
    }

});

const InfoCard = ({ publisedListings, description, icon }) => {
    const classes = useStyles();

    return (
        <>
            <Grid item xs={12} sm={6} md={3}>

                <div className={classes.box} >
                    <div className={classes.boxChild1}>
                        <h1>{publisedListings}</h1>
                        <h5>{description}</h5>
                    </div>
                    <div className={classes.boxChild2}>
                        <FontAwesomeIcon icon={icon} className={classes.fontStyle} />
                    </div>
                </div>
            </Grid>
        </>
    );
}

export default React.memo(InfoCard);