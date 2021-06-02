import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Default from './default.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 470,
        margin: 'auto',
        border: '1px solid rgb(212, 212, 212)'
    },
    media: {
        height: 230,
        position: 'relative'
    },
    card: {
        position: 'relative',
    },
    overlay: {
        position: 'absolute',
        top: '0',
        left: '0',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%',
        height: '230px',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0.7)',
        }
    },

    mainContainer: {
        margin: '10px 20px',
        display: 'flex',
        alignItems: 'center'

    },
    featured: {
        border: '2px solid #fcb812',
        padding: '1rem',
        marginRight: '0.5rem',
        fontWeight: 'bolder',
    },
    location: {
        margin: '120px 20px',
        display: 'flex'
    },
    dealer: {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    },
    locationIcon: {
        fontSize: '25px',
        color: '#fcb812',
        marginRight: '4px',
    },
    address: {
        display: 'flex'
    },
    viewMoreButton: {
        backgroundColor: '#fcb812',
        width: '45%',
        margin: '20px auto',
        fontWeight: 'bolder',
        fontSize: '12px',
        padding: '12px',
        textAlign: 'center',
        borderRadius: '5px',
        '&:hover': {
            color: 'white'
        }
    },
    to: {
        margin: '0px 10px',
        fontWeight: 'bolder'
    },
    titleAndlocation: {
        marginLeft: '10px'
    }
});

const AbaadeeCards = () => {
    const classes = useStyles();

    // TO CONVERT PRICE IN TO PKR
    // function numDifferentiation(val) {
    //     if (val >= 10000000) {
    //         val = (val / 10000000).toFixed(2) + ' Crore';
    //     } else if (val >= 100000) {
    //         val = (val / 100000).toFixed(2) + ' Lakh';
    //     }
    //     else if (val >= 1000) val = (val / 1000).toFixed(0) + ' Thousand';
    //     return val;
    // }

    return (
        <>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        // image={cover_image ? cover_image : Default}
                        image={Default}
                    />
                    <div className={classes.overlay}>
                        <div className={classes.mainContainer}>
                            <span className={classes.featured}>PKR 6.36 Lakh</span>
                            <span className={classes.to}>TO</span>
                            <span className={classes.featured}>PKR 49.95 Lakh</span>
                        </div>
                        <div className={classes.location}>
                            <div>
                                <img src={Default} className={classes.dealer} alt={'dealer logo'} />
                            </div>
                            <div className={classes.titleAndlocation}>
                                <h4>TITLE : Pearl Villas</h4>
                                <div className={classes.address}>
                                    <LocationOnIcon className={classes.locationIcon} />
                                    <h5 style={{ alignSelf: 'center' }}>Surjani Town,Karachi</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className={classes.viewMoreButton}>
                        Project Details
                    </p>
                </CardActionArea>
            </Card>
        </>
    )
}
export default React.memo(AbaadeeCards);