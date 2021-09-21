import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SkeletonForPropertyCard from '../SkeletonForPropertyCard';
import { v4 as uuidv4 } from 'uuid';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        "& h1": {
            color: 'rgb(76, 84, 85)',
        }
    },
    coverImage: {
        position: 'relative'
    },
    child: {
        width: '100%',
        marginBottom: '5vh',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0
    },
    PlotForSaleContainer: {
        display: 'flex',
        alignItems: 'center',
        "& h1": {
            marginLeft: '15px',
            color: 'white'
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
    thumbnail: {
        margin: '15px 0px',
        borderRadius: '5px'
    },
    social: {
        display: 'flex'
    },
    icon: {
        margin: '10px'
    },
    form: {
        borderRadius: '7px',
    }
}));


const SkeletonForAgentAndDeveloperDetail = ({ page_name, project_or_properties }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.coverImage}>
                <Skeleton variant="rect" width={'100%'} height={'50vh'} />
                <Container className={classes.child}>
                    <Grid container spacing={3}>
                        {/* AGENT NAME */}
                        <Grid item xs={12} md={8}>
                            <div className={classes.PlotForSaleContainer}>
                                <div className={classes.RoundedContainer}>
                                    <Skeleton variant="circle" width={50} height={50} />
                                </div>
                                <Skeleton variant="rect" width={'250px'} height={'45px'} />
                            </div>
                        </Grid>
                        {/* LOCATION */}
                        <Grid item xs={12} md={4} >
                            <div className={classes.pricingContainer} >
                                <div>
                                    <Skeleton variant="rect" width={'100px'} height={'25px'} />
                                    <br />
                                    <Skeleton variant="rect" width={'220px'} height={'35px'} />
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>

            <Container maxWidth="lg" className={classes.mainContainer}>
                <Grid container spacing={3}>
                    {/* 8 rows */}
                    <Grid item xs={12} md={8}>
                        <h1 style={{ marginTop: '40px' }} className={classes.thumbnail}>CONTACT DETAIL</h1>
                        <Skeleton variant="rect" width={'100%'} height={'50vh'} className={classes.skeleton} />

                        {/* description */}
                        <h1 style={{ marginTop: '40px' }} className={classes.thumbnail}>DESCRIPTION</h1>
                        <Skeleton variant="rect" width={'96%'} height={'35vh'} className={classes.thumbnail} />

                        {/* social platforms */}
                        <h1 style={{ marginTop: '40px' }} className={classes.thumbnail}>SOCIAL PRESENCE</h1>
                        <div className={classes.social}>
                            <Skeleton variant="circle" width={50} height={50} className={classes.icon} />
                            <Skeleton variant="circle" width={50} height={50} className={classes.icon} />
                            <Skeleton variant="circle" width={50} height={50} className={classes.icon} />
                            <Skeleton variant="circle" width={50} height={50} className={classes.icon} />
                            <Skeleton variant="circle" width={50} height={50} className={classes.icon} />
                        </div>
                        {/* Agent Interview */}
                        <div>
                            <h1 style={{ marginTop: '40px' }} className={classes.thumbnail}>{page_name} INTERVIEW</h1>
                            <Skeleton variant="rect" width={'96%'} height={'50vh'} className={classes.thumbnail} />
                        </div>
                    </Grid>
                    {/* 4 rows */}
                    <Grid item xs={12} md={4} className={classes.form}>
                        <h1 style={{ marginTop: '40px', textAlign: 'center' }} className={classes.thumbnail}>ENQUIRY FORM</h1>
                        <Skeleton variant="rect" width={'100%'} height={'80vh'} className={classes.skeleton} />
                    </Grid>
                </Grid>
                {/* PROJECT AND PROPERTIES */}
                <h1 style={{ marginTop: '40px', textAlign: 'center' }} className={classes.thumbnail}>{project_or_properties}</h1>
                <Grid container spacing={3} style={{ margin: '20px auto' }}>
                    {Array(3).fill().map(() => (
                        <Grid item xs={12} md={6} lg={4} key={uuidv4()}>
                            <SkeletonForPropertyCard />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    );
}
export default SkeletonForAgentAndDeveloperDetail;