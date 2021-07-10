import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '20px auto',
        minHeight: 'auto',
        maxWidth: '700px',
        cursor: 'pointer'
    },
    image: {
        height: '100%',
        width: '100%',
        margin: '0px',
        marginTop: '0px'
    },
    title: {
        textTransform: 'uppercase',
        color: 'rgb(59, 70, 86)'
    },
    contentContainer: {
        margin: '10px 15px 10px',
    },
    alignIconNinfo: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px'
    },
    address: {
        display: 'flex'
    },
    locationIcon: {
        fontSize: '25px',
        color: '#fcb812',
        marginRight: '4px',
    },
    contentDisplay: {
        display: 'flex',
    },
    viewMoreButton: {
        backgroundColor: 'rgb(59, 70, 86)',
        color: 'white',
        width: '45%',
        margin: '0 auto',
        marginBottom: '10px',
        fontWeight: 'bolder',
        fontSize: '12px',
        padding: '12px',
        textAlign: 'center',
        borderRadius: '5px',
        '&:hover': {
            backgroundColor: '#fcb812',
        }
    },
}));

const AbaadeeHorizontalCard = ({ buildingName, location, areaSize, areaUnit, beds, baths, price, cover_image }) => {
    const classes = useStyles();

    function numDifferentiation(val) {
        if (val >= 10000000) {
            val = (val / 10000000).toFixed(2) + ' Crore';
        } else if (val >= 100000) {
            val = (val / 100000).toFixed(2) + ' Lakh';
        }
        else if (val >= 1000) val = (val / 1000).toFixed(0) + ' Thousand';
        return val;
    }

    return (
        <>
            <Paper elevation={3} className={classes.mainContainer}>
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <img src={cover_image} alt={'cover'} className={classes.image} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div className={classes.contentContainer}>
                            <h3 className={classes.title}>{buildingName}</h3>

                            <div className={classes.alignIconNinfo} style={{ marginTop: '15px' }}>
                                <LocalOfferOutlinedIcon style={{ color: '#fcb812', fontSize: '20px', marginRight: '4px' }} />
                                <h3 ><span style={{ fontSize: '14px' }}>PKR</span> {numDifferentiation(price)} </h3>
                            </div>

                            <div className={classes.alignIconNinfo}>
                                <LocationOnOutlinedIcon style={{ color: '#fcb812', fontSize: '20px', marginRight: '6px' }} />
                                <h5>{location}</h5>
                            </div>

                            <div className={classes.alignIconNinfo}>
                                <AspectRatioIcon style={{ color: '#fcb812', fontSize: '20px', marginRight: '6px' }} />
                                <h5>{areaSize} {areaUnit} </h5>
                            </div>

                            <div className={classes.contentDisplay}>
                                <div className={classes.alignIconNinfo}>
                                    <SingleBedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                    {
                                        beds === 'donotshowbeds' ? <h4>-</h4> : <h5>{beds} Bedroom</h5>
                                    }
                                </div>

                                <div className={classes.alignIconNinfo}>
                                    <BathtubOutlinedIcon style={{ color: '#fcb812', fontSize: '20px', marginRight: '4px' }} />
                                    {
                                        (baths === 'donotshowbaths') || (baths === undefined) || (baths === 'null') ? <h4>-</h4> : <h5>{baths} Bathroom</h5>
                                    }

                                </div>
                            </div>

                        </div>

                        <p className={classes.viewMoreButton}>
                            View Details
                        </p>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}
export default React.memo(AbaadeeHorizontalCard);