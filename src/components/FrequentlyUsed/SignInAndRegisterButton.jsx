import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles({
    buttonContainer: {
        margin: '10px 0px',
        padding: '15px 0px',
        width: '100%',
        color: 'white',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        opacity: '0.9',
        "&:hover": {
            opacity: '1',

        }
    },
    childContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
const SignInAndRegisterButton = ({ ButtonIcon, ButtonText, bgColor, spin, onClick }) => {
    const classes = useStyles();
    return (
        <>
            <button className={classes.buttonContainer} style={bgColor} type="submit" onClick={onClick}>
                <div className={classes.childContainer}>
                    <p>{ButtonIcon && <FontAwesomeIcon icon={ButtonIcon} style={{ marginRight: '10px' }} />}</p>
                    <div>{spin ? <CircularProgress style={{ width: '13px', height: '13px' }} /> : ButtonText}</div>
                </div>
            </button>
        </>
    );
}
export default React.memo(SignInAndRegisterButton);