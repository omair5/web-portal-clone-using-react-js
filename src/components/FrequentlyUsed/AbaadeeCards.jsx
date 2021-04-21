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
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
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
        margin: '120px 20px',
    },
    locationIcon: {
        fontSize: '25px',
        color: '#fcb812',
        marginRight: '4px',
    },
    address: {
        display: 'flex'
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
    const { buildingName, location, areaSize, areaUnit, beds, price, cover_image, MainBox } = props

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
                            <h4>PROJECT : {buildingName}</h4>
                            <div className={classes.address}>
                                <LocationOnIcon className={classes.locationIcon} />
                                <h5 style={{ alignSelf: 'center' }}>{location}</h5>
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
                                <h4>{beds} BED</h4>
                            </div>
                        </div>

                        <Divider />

                        <div className={classes.contentDisplay}>
                            <div className={classes.alignIconNinfo} style={{ marginTop: '10px' }}>
                                <LocalOfferOutlinedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                <h3 style={{ fontWeight: 'bolder' }}><span style={{ fontSize: '14px' }}>PKR</span> {price} </h3>
                            </div>
                            <img src={cover_image} className={classes.dealer} alt={'dealer logo'} />
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