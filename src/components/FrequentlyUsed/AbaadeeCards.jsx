import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Tooltip from '@material-ui/core/Tooltip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Divider from '@material-ui/core/Divider';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import Default from './default.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 370,
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
        justifyContent: 'space-between'

    },
    featured: {
        border: '2px solid #fcb812',
        padding: '1rem',
        marginRight: '0.5rem',
        fontWeight: 'bolder',
    },
    price: {
        border: '1px solid white',
        padding: '1rem'
    },
    bookmarkIcon: {
        alignSelf: 'center',
        fontSize: '25px',
        color: '#fcb812',
        '&:hover': {
            color: 'white'
        }
    },
    location: {
        margin: '90px 20px',
        textTransform: 'capitalize',
        "& h4": {
            marginLeft: '5px',
            textTransform: 'capitalize'
        }

    },
    locationIcon: {
        fontSize: '25px',
        color: '#fcb812',
        marginRight: '4px',
    },
    address: {
        display: 'flex',
        margin: '5px 0px'
    },
    contentDisplay: {
        display: 'flex',
        margin: '20px 0px',
        justifyContent: 'space-between'
    },
    dealer: {
        width: '50px',
        height: '50px',
        borderRadius: '50%'
    },
    viewMoreButton: {
        backgroundColor: '#fcb812',
        width: '45%',
        margin: '0 auto',
        marginBottom: '10px',
        fontWeight: 'bolder',
        fontSize: '12px',
        padding: '12px',
        textAlign: 'center',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover': {
            color: 'white'
        }
    },
    alignIconNinfo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

const AbaadeeCards = (props) => {
    const classes = useStyles();
    const { buildingName, location, areaSize, areaUnit, beds, baths, price, cover_image, property_sub_type, MainBox } = props
   
    // TO CONVERT PRICE IN TO PKR
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
            <Card className={classes.root} style={MainBox}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cover_image ? cover_image : Default}

                    />
                    <div className={classes.overlay}>
                        <div className={classes.mainContainer}>
                            <span className={classes.featured}>FEATURED</span>
                            {/* <Tooltip title={<h6>Bookmark</h6>}>
                                <FavoriteBorderIcon className={classes.bookmarkIcon} />
                            </Tooltip> */}
                        </div>
                        <div className={classes.location}>
                            <h4>{buildingName}</h4>
                            <div className={classes.address}>
                                <LocationOnIcon className={classes.locationIcon} />
                                <h5 style={{ alignSelf: 'center' }}>{location}</h5>
                            </div>
                            <div className={classes.address}>
                                <AccountBalanceIcon className={classes.locationIcon} />
                                <h5 style={{ alignSelf: 'center' }}>{property_sub_type}</h5>
                            </div>
                        </div>
                    </div>

                    <CardContent>
                        <div className={classes.contentDisplay}>
                            <div className={classes.alignIconNinfo}>
                                <AspectRatioIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '6px' }} />
                                <h4>{areaSize} {areaUnit} </h4>
                            </div>

                            <div className={classes.alignIconNinfo}>
                                <SingleBedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                {
                                    beds === 'donotshowbeds' ? <h4>-</h4> : <h5>{beds} Bedroom</h5>
                                }
                            </div>

                        </div>

                        <Divider />

                        <div className={classes.contentDisplay}>
                            <div className={classes.alignIconNinfo} style={{ marginTop: '10px' }}>
                                <LocalOfferOutlinedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                <h4 style={{ fontWeight: 'bolder' }}><span style={{ fontSize: '14px' }}>PKR</span> {numDifferentiation(price)} </h4>
                            </div>
                            {/* <img src={cover_image} className={classes.dealer} alt={'dealer logo'} /> */}

                            <div className={classes.alignIconNinfo}>
                                <BathtubOutlinedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                {
                                    (baths === 'donotshowbaths') || (baths === undefined) || (baths === 'null') ? <h4>-</h4> : <h5>{baths} Bathroom</h5>
                                }

                            </div>
                        </div>
                    </CardContent>

                    <p className={classes.viewMoreButton}>
                        View More Details
                    </p>
                </CardActionArea>
            </Card>
        </>
    )
}
export default React.memo(AbaadeeCards);