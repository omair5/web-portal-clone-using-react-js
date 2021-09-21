import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NotFound from '../../pages/PageNotFound/notfound.svg'

// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        height: '20vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        alignItems: 'center',
        "& img": {
            width: '100px',
            height: '120px'
        },
        "& h4": {
            color: 'gray'
        }

    }
}));

const NoPropertyFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <img src={NotFound} alt="no match found" />
            <h4>SORRY ! NO MATCH FOUND</h4>
        </div>
    );
}

export default React.memo(NoPropertyFound);