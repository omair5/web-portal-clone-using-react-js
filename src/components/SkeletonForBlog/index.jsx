import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: '420px',
        maxWidth: '385px',
        border: '2px solid rgb(229, 229, 229)'
    },
    title: {
        margin: '15px 0px 5px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    section: {
        margin: '5px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    footer:{
        width:'80%',
        margin: '7px auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
}));

const SkeletonForBlog = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.mainContainer}>
            <Skeleton variant="rect" width={'100%'} height={200} />
            <div className={classes.title}>
                <Skeleton variant="text" width={'80%'} height={50} />
            </div>
            <div className={classes.section}>
                <Skeleton variant="text" width={'80%'} height={30} />
                <Skeleton variant="text" width={'80%'} height={30} />
            </div >
            <div className={classes.footer}>
                <Skeleton variant="text" width={'35%'} height={30} />
                <Skeleton variant="text" width={'30%'} height={60} />
            </div>
        </Paper >
    );
}
export default React.memo(SkeletonForBlog);