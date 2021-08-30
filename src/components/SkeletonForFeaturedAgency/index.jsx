import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    imgCenter: {
        margin: 'auto',
        display: 'block'
    }
}));

const SkeletonForFeaturedAgency = () => {
    const classes = useStyles();
    return (
        <div >
            <Skeleton variant="rect" height={150} width={150} className={classes.imgCenter} />
        </div>
    );
}
export default SkeletonForFeaturedAgency;