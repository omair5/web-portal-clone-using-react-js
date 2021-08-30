import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    PartnersLogo: {
        margin: '20px 10px',
        cursor: 'pointer',
        textAlign: 'center',
    }
}));

const SkeletonForPartnerLogo = () => {
    const classes = useStyles();
    return (
        <Grid item xs={6} sm={3} className={classes.mainContainer} >
            <Skeleton variant="rect" width={'200px'} height={'200px'} className={classes.PartnersLogo} />
        </Grid>
    );
}
export default SkeletonForPartnerLogo;