import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SadFace from '../../pages/PageNotFound/sadface.png'

// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        width: '100%',
        height: '60vh',
        display:'flex',
        flexDirection:'column',
        justifyContent: 'start',
        alignItems: 'center',
        "& img": {
            width: '200px',
            height: '200px'
        },
        "& h3": {
            color: 'gray'
        }

    }
}));

const NoPropertyFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.mainContainer}>
            <img src={SadFace} alt="sad face" />
            <h3>SORRY ! NO PROPERTY MATCH FOUND</h3>
        </div>
    );
}

export default React.memo(NoPropertyFound);