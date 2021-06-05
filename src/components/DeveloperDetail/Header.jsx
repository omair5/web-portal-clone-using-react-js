import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import styles from './header.module.css';
import PlotIcon from './images/plotIcon.jpg'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    child: {
        width: '100%',
        marginBottom: '5vh',
        alignItems: 'center'
    },
    PlotForSaleContainer: {
        display: 'flex',
        alignItems: 'center',
        "& h1": {
            marginLeft: '15px',
            color: 'white'
        }
    },
    pricingContainer: {
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'flex-start',
        },
    },
    RoundedContainer: {
        height: '60px',
        width: '70px',
    },
    RoundedImage: {
        height: '100%',
        width: '100%',
        borderRadius: '50%'
    }
}));

const Header = () => {
    const classes = useStyles();
    return (
        <>
            <div className={styles.mainContainer}>
                <Container className={classes.child}>
                    <Grid container spacing={3}>
                        {/* AGENT NAME */}
                        <Grid item xs={12} md={8}>
                            <div className={classes.PlotForSaleContainer}>
                                <div className={classes.RoundedContainer}>
                                    <img src={PlotIcon} alt="icon" className={classes.RoundedImage} />
                                </div>
                                <h1>Alrauf Group <VerifiedUserIcon style={{ color: '#4dc6ff', fontSize: '20px' }} /> </h1>
                            </div>
                        </Grid>
                        {/* LOCATION */}
                        <Grid item xs={12} md={4} >
                            <div className={classes.pricingContainer} >
                                <div>
                                    <p>Location</p>
                                    <h4>Shahrah-e-Faisal Road, Karachi, Pakistan</h4>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
}
export default React.memo(Header);