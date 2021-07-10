import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
    mainContainer: {
        margin: '20px auto',
        "& h1": {
            color: 'rgb(76, 84, 85)',
            margin: '30px 0px'
        }
    },
    skeleton: {
        borderRadius: '5px'
    },
    imageThumbnailContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    thumbnail: {
        margin: '10px 10px',
        borderRadius: '5px'
    },
    description: {
        margin: '20px auto',
        borderRadius: '5px'
    }
});

const SkeletonForPropertyDetail = () => {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={classes.mainContainer}>
                <Grid container spacing={3}>
                    {/* 8 rows */}
                    <Grid item xs={12} md={8}>
                        <Skeleton variant="rect" width={'100%'} height={'60vh'} className={classes.skeleton} />
                        <div className={classes.imageThumbnailContainer}>
                            <Skeleton variant="rect" width={'100px'} height={'85px'} className={classes.thumbnail} />
                            <Skeleton variant="rect" width={'100px'} height={'85px'} className={classes.thumbnail} />
                            <Skeleton variant="rect" width={'100px'} height={'85px'} className={classes.thumbnail} />
                        </div>

                        {/* about this property */}
                        <Skeleton variant="rect" width={'40%'} height={'45px'} style={{ marginTop: '40px' }} className={classes.thumbnail} />
                        <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                                <Skeleton variant="rect" width={'96%'} height={'35vh'} className={classes.thumbnail} />
                            </Grid>
                            <Grid item xs={12} md={6} >
                                <Skeleton variant="rect" width={'96%'} height={'35vh'} className={classes.thumbnail} />
                            </Grid>
                        </Grid>

                        {/* description */}
                        <Skeleton variant="rect" width={'40%'} height={'45px'} style={{ marginTop: '40px' }} className={classes.thumbnail} />
                        <Skeleton variant="rect" width={'96%'} height={'35vh'} className={classes.thumbnail} />

                    </Grid>

                    {/* 4 rows */}
                    <Grid item xs={12} md={4} >
                        <Skeleton variant="rect" width={'100%'} height={'90vh'} className={classes.skeleton} />
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}
export default SkeletonForPropertyDetail;