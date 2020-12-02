import { makeStyles } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import PropertyPartner from './images/property_partner.png'

// STYLES
const useStyles = makeStyles(theme => ({
    mainContainer: {
        height: '470px',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            height: 'auto',
        },
        [theme.breakpoints.down('lg')]: {
            margin: '15px 0px'
        },
    },
    grid1: {
        display: 'flex',
        alignItems: 'center',
        '& h1': {
            fontSize: '40px',
            textAlign: 'center',
            [theme.breakpoints.down('sm')]: {
                fontSize: '30px',
            },
        },
        '& Button': {
            display: 'block',
            margin: "15px auto",
            padding: '10px',
            backgroundColor: '#fcb812',
            fontSize: '20px',
            borderRadius: '5px',
            [theme.breakpoints.down('md')]: {
                fontSize: '15px',
            },
            '&:hover': {
                backgroundColor: '#fcb812',
                color: 'white',
            }
        },
    },
    abaadee: {
        color: '#fcb812',
        fontWeight: 'bolder'
    },
    PartnerImage: {
        display: 'block',
        margin: '0px auto',
        [theme.breakpoints.down('md')]: {
            display: 'block',
            margin: '0px auto',
        },
    }

}));

const AapKaPropertyPartner = () => {
    // LOGIC
    const classes = useStyles();

    // USER INTERFACE 
    return (
        <>
            <div className={classes.mainContainer}>
                <Container maxWidth="lg" >
                    <Grid container >
                        <Grid item xs={12} sm={12} md={6} className={classes.grid1}  >
                            <div style={{ margin: '0px auto' }} >
                                <h1> <span className={classes.abaadee}>ABAADEE</span> APKA PROPERTY PARTNER</h1>
                                <Button >ADD PROPERTY</Button>
                            </div>
                        </Grid>

                        <Grid item xs={12} md={6} >
                            <img className={classes.PartnerImage} src={PropertyPartner} alt="property partner" width='450px' height='400px' />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}

export default AapKaPropertyPartner;