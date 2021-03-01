import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
const SignInAndRegisterButton = ({ ButtonIcon, ButtonText, bgColor }) => {
    const classes = useStyles();
    return (
        <>
            <button className={classes.buttonContainer} style={bgColor} type="submit">
                <div className={classes.childContainer}>
                    <p>{ButtonIcon && <FontAwesomeIcon icon={ButtonIcon} style={{ marginRight: '10px' }} />}</p>
                    <p>{ButtonText}</p>
                </div>
            </button>
        </>
    );
}
export default React.memo(SignInAndRegisterButton);