import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ClassIcon from '@material-ui/icons/Class';
import Skeleton from '@material-ui/lab/Skeleton';



const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '15px auto',
        overflow: 'hidden'
    },
    headerContainer: {
        margin: '15px auto',
    },
    childContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "& h4": {
            textTransform: 'capitalize',
            color: 'rgb(83, 90, 89)'
        }
    },
    iconStyle: {
        margin: '15px'
    },
    icon: {
        fontSize: '25px',
        color: 'rgb(252, 184, 22)',
        paddingRight: '5px'
    },
    ImageContainer: {
        width: '100%',
        height: '520px',
        [theme.breakpoints.down('md')]: {
            paddingTop: '66.66%',
            height: '0px'
        },
    },
    DescriptionContainer: {
        margin: '15px 0px'
    }
}));

const SkeletonForBlogDetail = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.mainContainer} >
            <div className={classes.headerContainer}>
                <Skeleton variant="rect" width={'75%'} height={'60px'} style={{ margin: 'auto' }} />
                <Container maxWidth="sm" className={classes.childContainer} >
                    <div className={`${classes.childContainer} ${classes.iconStyle}`}>
                        <ClassIcon className={classes.icon} />
                        <Skeleton variant="rect" width={'60px'} height={'30px'} />
                    </div>

                    <div className={classes.childContainer}>
                        <CalendarTodayIcon className={classes.icon} />
                        <Skeleton variant="rect" width={'60px'} height={'30px'} />
                    </div>
                </Container>
            </div>

            <div className={classes.ImageContainer}>
                <Skeleton variant="rect" width={'100%'} height={'100%'} />
            </div>

            <div className={classes.DescriptionContainer}>
                <Skeleton variant="rect" width={'100%'} height={'40px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'60%'} height={'25px'} style={{ margin: '10px 0px' }} />.
                <Skeleton variant="rect" width={'100%'} height={'40px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'20%'} height={'25px'} style={{ margin: '10px 0px' }} />.
                <Skeleton variant="rect" width={'100%'} height={'40px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'100%'} height={'25px'} style={{ margin: '10px 0px' }} />
                <Skeleton variant="rect" width={'10%'} height={'25px'} style={{ margin: '10px 0px' }} />.

            </div>

        </Container>
    );
}

export default SkeletonForBlogDetail;