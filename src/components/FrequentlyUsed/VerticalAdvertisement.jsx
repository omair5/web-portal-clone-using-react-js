import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    mainContainer: {
        margin: '20px auto',
        width:'100%'
    },
    childContainer: {
        margin: '0px auto 15px',

    }
}));

const VerticalAdvertisement = ({ pic }) => {
    const classes = useStyles();
    return (
        <>
            <div className={classes.mainContainer}>
                <div className={classes.childContainer}>
                    <img src={pic} alt="display" width={'100%'} height={'140px'} />
                </div>
                <div className={classes.childContainer}>
                    <img src={pic} alt="display" width={'100%'} height={'140px'} />
                </div>
                <div className={classes.childContainer}>
                    <img src={pic} alt="display" width={'100%'} height={'140px'} />
                </div>
            </div>

        </>
    );
}

export default React.memo(VerticalAdvertisement);