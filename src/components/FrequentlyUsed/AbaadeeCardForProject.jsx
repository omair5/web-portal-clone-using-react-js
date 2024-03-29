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
        textTransform: 'capitalize'
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
        marginLeft: '12px',
        '& h4': {
            textTransform: 'uppercase',
            marginLeft: "5px"
        }
    }
});

const AbaadeeCardForProject = ({ city, location, price, cover_image, logo, projectName }) => {
    const classes = useStyles();
    const split_array = price.split(' ')
    const startingPrice = `${split_array[1]} ${split_array[2]}`
    const lastPrice = `${split_array[4]} ${split_array[5]}`
    console.log(split_array)

    return (
        <>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={cover_image ? cover_image : Default}

                    />
                    <div className={classes.overlay}>
                        <div className={classes.mainContainer}>
                            <span className={classes.featured}>PKR {startingPrice}</span>
                            <span className={classes.to}>TO</span>
                            <span className={classes.featured}>PKR {lastPrice}</span>

                        </div>
                        <div className={classes.location}>
                            <div>
                                <img src={logo} className={classes.dealer} alt={'dealer logo'} />
                            </div>
                            <div className={classes.titleAndlocation}>
                                <h4>{projectName}</h4>
                                <div className={classes.address}>
                                    <LocationOnIcon className={classes.locationIcon} />
                                    <h5 style={{ alignSelf: 'center' }}>{location} , {city}</h5>
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
export default React.memo(AbaadeeCardForProject);