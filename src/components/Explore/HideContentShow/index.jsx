import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// STYLES
const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: 'rgb(54, 54, 54)',
        display: 'flex',
        height: '35px',
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9,
        "& p": {
            flexBasis: '50%',
            backgroundColor: 'rgb(54, 54, 54)',
            color: 'white',
            borderRight: '1px solid black',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bolder',
            letterSpacing: '1.4px'
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
                <p
                    onClick={HandleSearch}>
                    SEARCH
                </p>
                <p
                    style={{ borderLeft: '1px solid black' }}
                    onClick={HandleCard}>
                    PROPERTY LIST
                </p>
            </div>
        </>
    );
}

export default React.memo(HideContentShow);