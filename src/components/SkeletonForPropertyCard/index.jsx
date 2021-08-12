import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        height: '330px',
        maxWidth: 470,
        border: '2px solid rgb(229, 229, 229)'
    },
    Row: {
        margin: '15px 0px',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
}));

const SkeletonForPropertyCard = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <Skeleton variant="rect" width={'100%'} height={230} />
            <div className={classes.Row}>
                <Skeleton variant="text" width={'50%'} height={80} />
            </div>
        </div>
    );
}
export default SkeletonForPropertyCard;