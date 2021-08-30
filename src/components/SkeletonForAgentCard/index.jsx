import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: '380px',
        maxWidth: '460px',
        border: '2px solid rgb(229, 229, 229)',
        margin: 'auto'
    },
    imageContainer: {
        position: 'relative'
    },
    Row: {
        margin: '15px 0px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    overlay: {
        position: 'absolute',
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        marginLeft: '20px',
        marginBottom: '20px'
    }
}));

const SkeletonForAgentCard = () => {
    const classes = useStyles();
    return (

        <div className={classes.mainContainer}>
            <div className={classes.imageContainer}>
                <Skeleton variant="rect" width={'100%'} height={230} />
                <div className={classes.overlay}>
                    <Skeleton variant="circle" width={50} height={50} />
                    <div>
                        <Skeleton variant="text" height={40} width={130} style={{ marginLeft: '20px' }} />
                        <Skeleton variant="text" height={40} width={200} style={{ marginLeft: '20px' }} />
                    </div>
                </div>
            </div>
            <div className={classes.Row}>
                <Skeleton variant="text" width={'50%'} height={40} />
                <Skeleton variant="text" width={'20%'} height={40} />
            </div>

            <div className={classes.Row}>
                <Skeleton variant="text" width={'40%'} height={70} />
            </div>
        </div>
    );
}
export default SkeletonForAgentCard;