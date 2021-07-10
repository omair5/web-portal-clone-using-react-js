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
            letterSpacing: '1.4px',
            padding: '15px 0px'
        }
    }
}));
const FooterForMobileDevices = ({ toSearchText, id }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const HandleSearch = (e) => {
        if (e.target.id === 'search-1') {
            dispatch({ type: 'searchToggle', payload: true })
            dispatch({ type: 'cardToggle', payload: false })
        }
        if (e.target.id === 'search-2') {
            dispatch({ type: 'DeveloperSearchToggle', payload: true })
            dispatch({ type: 'DeveloperCardToggle', payload: false })
        }
        if (e.target.id === 'search-3') {
            dispatch({ type: 'AgentSearchToggle', payload: true })
            dispatch({ type: 'AgentCardToggle', payload: false })
        }

    }
    const HandleCard = (e) => {
        if (e.target.innerHTML === 'PROPERTY LIST') {
            dispatch({ type: 'searchToggle', payload: false })
            dispatch({ type: 'cardToggle', payload: true })
        }
        if (e.target.innerHTML === 'DEVELOPERS LIST') {
            console.log('this is agent card')
            dispatch({ type: 'DeveloperSearchToggle', payload: false })
            dispatch({ type: 'DeveloperCardToggle', payload: true })
        }
        if (e.target.innerHTML === 'AGENTS LIST') {
            console.log('this is agent card')
            dispatch({ type: 'AgentSearchToggle', payload: false })
            dispatch({ type: 'AgentCardToggle', payload: true })
        }

    }

    // USER INTERFACE
    return (
        <>
            <div className={classes.mainContainer}>
                <p
                    onClick={HandleSearch} id={id}>
                    SEARCH
                </p>
                <p
                    style={{ borderLeft: '1px solid black' }}
                    onClick={HandleCard}>
                    {toSearchText}
                </p>
            </div>
        </>
    );
}

export default React.memo(FooterForMobileDevices);