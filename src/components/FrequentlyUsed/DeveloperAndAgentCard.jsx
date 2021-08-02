import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import Tooltip from '@material-ui/core/Tooltip';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '95%',
        margin: 'auto',
        border: '1px solid rgb(212, 212, 212)',
    },
    media: {
        height: 230,
        position: 'relative',
    },
    coverImage: {
        height: '100%',
        width: '100%'
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
        justifyContent: 'flex-end'

    },
    featured: {
        border: '2px solid #fcb812',
        borderRadius: '5px',
        padding: '1rem',
        marginRight: '0.5rem',
        fontWeight: 'bolder',
    },
    bookmarkIcon: {
        alignSelf: 'center',
        fontSize: '25px',
        color: '#fcb812',
        '&:hover': {
            color: 'white'
        }
    },
    CardFooter: {
        margin: '100px 20px',
        display: 'flex'
    },
    locationIcon: {
        fontSize: '25px',
        color: '#fcb812',
        marginRight: '4px',
    },
    address: {
        display: 'flex',
        marginTop: '5px',
    },
    developerName: {
        marginLeft: '5px',
        textTransform: 'uppercase'
    },
    contentDisplay: {
        display: 'flex',
        margin: '20px 0px',
        justifyContent: 'space-between'
    },
    Developer: {
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
        justifyContent: 'center',
        [theme.breakpoints.only('md')]: {
            "& h5": {
                fontSize: '10px'
            }
        },
    },
}));

const DeveloperCard = (props) => {
    const classes = useStyles();
    const { image, name, address, PhoneNumber } = props
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={classes.media}>
                        <img src={image} alt="cover" className={classes.coverImage} />
                    </div>

                    <div className={classes.overlay}>
                        <div className={classes.mainContainer}>
                            <span className={classes.featured}>FEATURED</span>
                            {/* <Tooltip title={<h6>Bookmark</h6>}>
                                <FavoriteBorderIcon className={classes.bookmarkIcon} />
                            </Tooltip> */}
                        </div>

                        <div className={classes.CardFooter}>
                            {/* FOR DEVELOPER LOGO */}
                            <div style={{ marginRight: '5px' }}>
                                <img src={image} className={classes.Developer} alt={'Developer logo'} />
                            </div>
                            {/* FOR DEVELOPER NAME AND ADDRESS */}
                            <div >
                                <h4 className={classes.developerName}>{name}</h4>
                                <div className={classes.address}>
                                    <LocationOnIcon className={classes.locationIcon} />
                                    <h5 style={{ alignSelf: 'center', fontWeight: 'light' }}>{address}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CardContent>
                        <div className={classes.contentDisplay}>
                            <div className={classes.alignIconNinfo}>
                                <ApartmentIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '6px' }} />
                                <h5> {name}</h5>
                            </div>
                            <div className={classes.alignIconNinfo}>
                                <PhoneIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                <h5>{PhoneNumber}</h5>
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
export default React.memo(DeveloperCard);