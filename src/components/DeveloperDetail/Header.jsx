import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import styles from './header.module.css';
import Grid from '@material-ui/core/Grid';
import NewUser from './Badges/new.png'
import Verified from './Badges/verified.png'
import TenTen from './Badges/tenbyten.png'
import Premium from './Badges/premium.png'
import Tooltip from '@material-ui/core/Tooltip';

const LightTooltip = withStyles((theme) => ({
    tooltip: {
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}))(Tooltip);

const useStyles = makeStyles(theme => ({
    child: {
        width: '100%',
        marginBottom: '5vh',
        alignItems: 'center',
        zIndex: 20
    },
    PlotForSaleContainer: {
        display: 'flex',
        alignItems: 'center',
        "& h1": {
            marginLeft: '15px',
            color: 'white',
            alignSelf: 'center',
            textTransform: 'uppercase'
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
    },
    badge: {
        height: '45px',
        width: '45px',
        position: 'relative',
        bottom: '10px',
        left: '10px'
    }
}));

const Header = ({ coverImage, logo, developerName, developerRating, location }) => {
    const classes = useStyles();
    const GenerateBadge = (value) => {
        switch (value) {
            case "newuser":
                return NewUser
            case "verified":
                return Verified
            case "tenten":
                return TenTen
            case "premium":
                return Premium
            default:
                return Verified
        }
    }
    return (
        <>
            <div className={`${styles.mainContainer}`} style={{ backgroundImage: `url(${coverImage})` }}>
                <div className={styles.overlay}></div>
                <Container className={classes.child}>
                    <Grid container spacing={3}>
                        {/* AGENT NAME */}
                        <Grid item xs={12} md={8}>
                            <div className={classes.PlotForSaleContainer}>
                                <div className={classes.RoundedContainer}>
                                    <img src={logo} alt="icon" className={classes.RoundedImage} />
                                </div>
                                <h1>{developerName}</h1>
                                <LightTooltip title={`${developerRating} Developer`}>
                                    <img src={GenerateBadge(developerRating)} alt={developerRating} className={classes.badge} />
                                </LightTooltip>
                            </div>
                        </Grid>
                        {/* LOCATION */}
                        <Grid item xs={12} md={4} >
                            <div className={classes.pricingContainer} >
                                <div>
                                    <p>Location</p>
                                    <h4>{location}</h4>
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