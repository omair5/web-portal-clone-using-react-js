import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: '450px',
        maxWidth: '420px',
        border: '2px solid rgb(229, 229, 229)'
    },
    Row: {
        margin: '15px 0px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
}));

const SkeletonForBlog = () => {
    const classes = useStyles();
    return (

        <div className={classes.mainContainer}>
            <Skeleton variant="rect" width={'100%'} height={230} />
            <div className={classes.Row}>
                <Skeleton variant="text" width={'50%'} height={40} />
                <Skeleton variant="text" width={'20%'} height={40} />
            </div>
            <div className={classes.Row}>
                <Skeleton variant="text" width={'50%'} height={40} style={{ marginRight: '30px' }} />
                <Skeleton variant="circle" width={50} height={50} />
            </div>
            <div className={classes.Row}>
                <Skeleton variant="text" width={'40%'} height={70} />
            </div>
        </div>


    );
}

export default SkeletonForBlog;