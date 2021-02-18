import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PersonIcon from '@material-ui/icons/Person';
import { useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    paper: {
        minWidth: '50%',
        height: 'auto',
        margin: '20px auto'
    },
    AccountIconContainer: {
        margin: '15px 15px',
        display: 'flex',
        alignItems: 'center',
    },
    AccountIcon: {
        fontSize: '40px',
        color: '#fcb812',
        marginRight: '10px'
    },
    LoginContainer: {
        margin: '15px 15px',
        "& p": {
            textAlign: 'center'
        }
    },
    ButtonContainer: {
        margin: '15px 0px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "&>p": {
            margin: '0px 10px'
        }
    },
    button: {
        padding: '15px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '5px',
        backgroundColor: '#fcb812',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        transition: 'all 0.3s ease',
        "& p": {
            fontWeight: 'bold'
        },
        " &:hover": {
            "& p": {
                color: 'white',
                transition: 'all 0.3s ease',

            }
        }
    },
    personicon: {
        margin: '0px 5px',
        fontSize: '20px'
    }
}));

const PackageLoginContainer = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const HandleRegister = () => {
        dispatch({ type: 'OpenRegisterDialog' })
    }
    const HandleSignIn = () => {
        dispatch({ type: 'OpenSignInDialog' })
    }
    return (
        <>
            <Paper className={classes.paper}>
                <div className={classes.AccountIconContainer}>
                    <AccountCircleIcon className={classes.AccountIcon} />
                    <p>Account</p>
                </div>

                <div className={classes.LoginContainer}>
                    <p>You must be logged in to post new listings.</p>
                    <div className={classes.ButtonContainer}>
                        <button className={classes.button} onClick={HandleSignIn}>
                            <p><PersonIcon className={classes.personicon} /></p>
                            <p>Sign in</p>
                        </button>
                        <p>OR</p>
                        <button className={classes.button} onClick={HandleRegister}>
                            <p><PersonIcon className={classes.personicon} /></p>
                            <p>Register</p>
                        </button>
                    </div>
                </div>
            </Paper>
        </>
    );
}
export default React.memo(PackageLoginContainer);