import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import styles from './newprojects.module.css'
import propertyImage from './images/property.jpeg'
import Tooltip from '@material-ui/core/Tooltip';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Divider from '@material-ui/core/Divider';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
const useStyles = makeStyles({
    root: {
        maxWidth: 370,
        margin: 'auto',
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
        display: 'block',
        margin: '0 auto',
        marginBottom: '10px',
        fontWeight: 'bolder',
        padding: '7px'
    }
});

const NewProjects = () => {
    const classes = useStyles();
    return (
        <Container maxWidth='lg' className={styles.cardMainBox}>
            <h1 className={`${styles.marginBottom} text-center`}>DISCOVER NEW PROJECTS</h1>

            <Grid container spacing={2}>

                {/* CARD 1 */}
                <Grid item xs={12} md={4} >

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={propertyImage}

                            />
                            <div className={classes.overlay}>
                                <div className={classes.mainContainer}>
                                    <span className={classes.featured}>FEATURED</span>
                                    <Tooltip title={<h6>Bookmark</h6>}>
                                        <FavoriteBorderIcon className={classes.bookmarkIcon} />
                                    </Tooltip>
                                </div>
                                <div className={classes.location}>
                                    <h4>PROJECT : BILAL PLAZA</h4>
                                    <div className={classes.address}>
                                        <LocationOnIcon className={classes.locationIcon} />
                                        <h5 style={{ alignSelf: 'center' }}>Malir, Karachi, Pakistan</h5>
                                    </div>
                                </div>
                            </div>

                            <CardContent>
                                <div className={classes.contentDisplay}>
                                    <div style={{ display: 'flex' }}>
                                        <AspectRatioIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '6px' }} />
                                        <h4>460 Square Feet </h4>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <SingleBedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                        <h4>3 BED</h4>
                                    </div>
                                </div>

                                <Divider />

                                <div className={classes.contentDisplay}>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <LocalOfferOutlinedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                        <h3 style={{ fontWeight: 'bolder' }}><span style={{ fontSize: '14px' }}>PKR</span> 1.39 Crore </h3>
                                    </div>
                                    <img src={propertyImage} className={classes.dealer} />
                                </div>
                            </CardContent>

                            <div >
                                <Button className={classes.viewMoreButton}>
                                    View More Details
                            </Button>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* CARD 2 */}
                <Grid item xs={12} md={4} >

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={propertyImage}

                            />
                            <div className={classes.overlay}>
                                <div className={classes.mainContainer}>
                                    <span className={classes.featured}>FEATURED</span>
                                    <Tooltip title={<h6>Bookmark</h6>}>
                                        <FavoriteBorderIcon className={classes.bookmarkIcon} />
                                    </Tooltip>
                                </div>
                                <div className={classes.location}>
                                    <h4>PROJECT : BILAL PLAZA</h4>
                                    <div className={classes.address}>
                                        <LocationOnIcon className={classes.locationIcon} />
                                        <h5 style={{ alignSelf: 'center' }}>Malir, Karachi, Pakistan</h5>
                                    </div>
                                </div>
                            </div>

                            <CardContent>
                                <div className={classes.contentDisplay}>
                                    <div style={{ display: 'flex' }}>
                                        <AspectRatioIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '6px' }} />
                                        <h4>460 Square Feet </h4>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <SingleBedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                        <h4>3 BED</h4>
                                    </div>
                                </div>

                                <Divider />

                                <div className={classes.contentDisplay}>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <LocalOfferOutlinedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                        <h3 style={{ fontWeight: 'bolder' }}><span style={{ fontSize: '14px' }}>PKR</span> 1.39 Crore </h3>
                                    </div>
                                    <img src={propertyImage} className={classes.dealer} />
                                </div>
                            </CardContent>

                            <div >
                                <Button className={classes.viewMoreButton}>
                                    View More Details
                                </Button>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>

                {/* CARD 3 */}
                <Grid item xs={12} md={4} >

                    <Card className={classes.root}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={propertyImage}

                            />
                            <div className={classes.overlay}>
                                <div className={classes.mainContainer}>
                                    <span className={classes.featured}>FEATURED</span>
                                    <Tooltip title={<h6>Bookmark</h6>}>
                                        <FavoriteBorderIcon className={classes.bookmarkIcon} />
                                    </Tooltip>
                                </div>
                                <div className={classes.location}>
                                    <h4>PROJECT : BILAL PLAZA</h4>
                                    <div className={classes.address}>
                                        <LocationOnIcon className={classes.locationIcon} />
                                        <h5 style={{ alignSelf: 'center' }}>Malir, Karachi, Pakistan</h5>
                                    </div>
                                </div>
                            </div>

                            <CardContent>
                                <div className={classes.contentDisplay}>
                                    <div style={{ display: 'flex' }}>
                                        <AspectRatioIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '6px' }} />
                                        <h4>460 Square Feet </h4>
                                    </div>
                                    <div style={{ display: 'flex' }}>
                                        <SingleBedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                        <h4>3 BED</h4>
                                    </div>
                                </div>

                                <Divider />

                                <div className={classes.contentDisplay}>
                                    <div style={{ display: 'flex', marginTop: '10px' }}>
                                        <LocalOfferOutlinedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                        <h3 style={{ fontWeight: 'bolder' }}><span style={{ fontSize: '14px' }}>PKR</span> 1.39 Crore </h3>
                                    </div>
                                    <img src={propertyImage} className={classes.dealer} />
                                </div>
                            </CardContent>

                            <div >
                                <Button className={classes.viewMoreButton}>
                                    View More Details
                                </Button>
                            </div>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Container>);

}

export default NewProjects;