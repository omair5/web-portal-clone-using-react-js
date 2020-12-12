import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: '#fcb812',
        width: '100%',
        height: '65px',
        position: 'fixed',
        bottom: 0,
        zIndex: 9,
        "& span": {
            width: '50%',
            backgroundColor: '#fcb812',
            display: "inline-block",
            textAlign: 'center'
        }
    }
}));
const HideContentShow = () => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const HandleSearch = () => {
        dispatch({ type: 'searchToggle', payload: true })
        dispatch({ type: 'cardToggle', payload: false })
    }
    const HandleCard = () => {
        dispatch({ type: 'searchToggle', payload: false })
        dispatch({ type: 'cardToggle', payload: true })
    }

    // USER INTERFACE
    return (
        <>
            <div className={classes.mainContainer}>
                <span
                    style={{ padding: "30px", cursor: 'pointer' }}
                    onClick={HandleSearch}>
                    SEARCH
                </span>
                <span
                    style={{ padding: "30px", cursor: 'pointer' }}
                    onClick={HandleCard}>
                    PROPERTY LIST
                </span>
            </div>
        </>
    );
}

export default HideContentShow;