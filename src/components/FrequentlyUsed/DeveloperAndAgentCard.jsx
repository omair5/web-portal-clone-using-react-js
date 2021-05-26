import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import Tooltip from '@material-ui/core/Tooltip';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ApartmentIcon from '@material-ui/icons/Apartment';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles((theme) => ({
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
        marginTop: '5px'
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
    //     developerName: {
    // fontWeight:'bolder',
    // fontSi
    //     }
}));

const DeveloperCard = (props) => {
    const classes = useStyles();
    const { bgImage, DeveloperLogo, DeveloperName, Address, PhoneNumber, MainBox } = props
    return (
        <>
            <Card className={classes.root} style={MainBox}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={bgImage}

                    />
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
                                <img src={DeveloperLogo} className={classes.Developer} alt={'Developer logo'} />
                            </div>
                            {/* FOR DEVELOPER NAME AND ADDRESS */}
                            <div>
                                <h4 className={classes.developerName}>{DeveloperName}</h4>
                                <div className={classes.address}>
                                    <LocationOnIcon className={classes.locationIcon} />
                                    <h5 style={{ alignSelf: 'center', fontWeight: 'light' }}>{Address}</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <CardContent>
                        <div className={classes.contentDisplay}>
                            <div className={classes.alignIconNinfo}>
                                <ApartmentIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '6px' }} />
                                <h5> {DeveloperName}</h5>
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