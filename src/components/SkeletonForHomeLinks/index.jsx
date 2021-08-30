import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AspectRatioIcon from '@material-ui/icons/AspectRatio';
import SingleBedIcon from '@material-ui/icons/SingleBed';
import BathtubOutlinedIcon from '@material-ui/icons/BathtubOutlined';
import LocalOfferOutlinedIcon from '@material-ui/icons/LocalOfferOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Skeleton from '@material-ui/lab/Skeleton';


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

    contentContainer: {
        margin: '10px 15px 10px',
    },
    alignIconNinfo: {
        display: 'flex',
        alignItems: 'center',
        margin: '5px'
    },
    contentDisplay: {
        display: 'flex',
    },
    viewMoreButton: {
        backgroundColor: 'rgb(59, 70, 86)',
        margin: '10px auto',
        borderRadius: '5px',
    },
}));

const SkeletonForHomeLinks = () => {
    const classes = useStyles();


    return (
        <>
            <Paper elevation={3} className={classes.mainContainer}>
                <Grid container >
                    <Grid item xs={12} sm={6}>
                        <Skeleton variant="rect" className={classes.image} />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <div className={classes.contentContainer}>
                            <Skeleton variant="rect" width={'250px'} height={'50px'} />

                            <div className={classes.alignIconNinfo} style={{ marginTop: '15px' }}>
                                <LocalOfferOutlinedIcon style={{ color: '#fcb812', fontSize: '20px', marginRight: '4px' }} />
                                <Skeleton variant="rect" width={'130px'} height={'25px'} />
                            </div>

                            <div className={classes.alignIconNinfo}>
                                <LocationOnOutlinedIcon style={{ color: '#fcb812', fontSize: '20px', marginRight: '6px' }} />
                                <Skeleton variant="rect" width={'130px'} height={'25px'} />
                            </div>

                            <div className={classes.alignIconNinfo}>
                                <AspectRatioIcon style={{ color: '#fcb812', fontSize: '20px', marginRight: '6px' }} />
                                <Skeleton variant="rect" width={'110px'} height={'25px'} />
                            </div>

                            <div className={classes.contentDisplay}>
                                <div className={classes.alignIconNinfo}>
                                    <SingleBedIcon style={{ color: '#fcb812', fontSize: '25px', marginRight: '4px' }} />
                                    <Skeleton variant="rect" width={'80px'} height={'25px'} />
                                </div>

                                <div className={classes.alignIconNinfo}>
                                    <BathtubOutlinedIcon style={{ color: '#fcb812', fontSize: '20px', marginRight: '4px' }} />
                                    <Skeleton variant="rect" width={'80px'} height={'25px'} />

                                </div>
                            </div>

                        </div>


                        <Skeleton className={classes.viewMoreButton} variant="rect" width={'135px'} height={'45px'} />

                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}
export default SkeletonForHomeLinks;