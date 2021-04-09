import React, { useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import InputTextField from './InputTextField';
import SignInAndRegisterButton from './SignInAndRegisterButton';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    mainContainer: {
        padding: '20px 25px',
        minWidth: '350px',
        position: 'relative',
        "& h4": {
            textAlign: 'center',
            padding: '15px 0px',
            color: 'rgb(83, 90, 89)'
        },
    },
    heading: {
        textAlign: 'center',
        color: 'rgb(83, 90, 89)',
        padding: '15px 0px',
        paddingTop: '25px'
    },
    SuccessMessage: {
        fontSize: '12px',
        fontWeight: 'bolder',
        color: '#289947',
    },
    ErrorMessage: {
        fontSize: '12px',
        fontWeight: 'bolder',
        color: '#db2323',
    },
    loginButton: {
        display: 'block',
        width: '50%',
        margin: '25px auto',
        backgroundColor: 'rgb(83, 90, 89)',
        padding: '15px 5px',
        border: 'none',
        cursor: 'pointer',
        color: 'white'
    }
});

const ResetPasswordDialogBox = () => {
    const history = useHistory()
    const classes = useStyles();
    const dispatch = useDispatch()
    const ResetPasswordBox = useSelector(state => state.FrequentlyUsed_Reset_Password)
    const [formFields, setformFields] = useState({ password: '', confirm_password: '' })
    const [passwordMatchingError, setpasswordMatchingError] = useState(false)
    const [loader, setloader] = useState(false)
    const [successMessage, setsuccessMessage] = useState(false)
    const [errorMessage, seterrorMessage] = useState(false)
    let [counter, setcounter] = useState(5)

    // HANDLE FORM INPUT
    const HandleInputChange = (e) => {
        setformFields({ ...formFields, [e.target.name]: e.target.value })
    }
    // HANDLE FORM SUBMIT
    const HandleSubmit = (e) => {
        e.preventDefault();
        setloader(true)
        const FormData = { password: formFields.password }
        setpasswordMatchingError(false)
        setsuccessMessage(false)
        seterrorMessage(false)
        if (formFields.confirm_password !== formFields.password) {
            setpasswordMatchingError(true)
            setloader(false)
        }
        else {
            axios.post('http://localhost:3200/auth/Forgetpass', FormData).then((response) => {
                setloader(false)
                setformFields({ password: '', confirm_password: '' })
                if (response.data === 'Password change successfully') {
                    setsuccessMessage(true)
                    var newYearCountdown = setInterval(function () {
                        setcounter(counter--)
                        if (counter < 0) {
                            clearInterval(newYearCountdown);
                            history.push('/')
                            dispatch({ type: 'OpenSignInDialog' })
                        }
                    }, 1000);
                }
                else {
                    seterrorMessage(true)
                }
            }).catch((error) => console.log(error))
        }
    }

    // HANDLE BACK TO LOGIN PAGE
    const HandleBackToLogin = () => {
        history.push('/')
        dispatch({ type: 'OpenSignInDialog' })
    }

    return (
        <>
            <Dialog aria-labelledby="customized-dialog-title" open={ResetPasswordBox} >
                <DialogContent className={classes.mainContainer}>
                    <h2 className={classes.heading}>RESET PASSWORD</h2>
                    <form onSubmit={HandleSubmit}>
                        {/* PASSWORD */}
                        <InputTextField
                            TextFieldId='1'
                            TextFieldPlaceHolder='New Password'
                            InputType='password'
                            autofocus={true}
                            callBack={HandleInputChange}
                            value={formFields.password}
                            name='password'
                            outlined="outlined"
                            passwordVisibility={true}
                            required={true}
                            helperText=" The password must be at least 4 characters long, but no more than 20"
                            pattern='.{4,32}'
                        />

                        {/* CONFIRM PASSWORD */}
                        <InputTextField
                            TextFieldId='2'
                            TextFieldPlaceHolder='Confirm Password'
                            InputType='password'
                            callBack={HandleInputChange}
                            value={formFields.confirm_password}
                            name='confirm_password'
                            outlined="outlined"
                            passwordVisibility={true}
                            required={true}
                            helperText={passwordMatchingError ? 'password does not match' : null}
                            error={passwordMatchingError}
                        />

                        {/* SIGN IN BUTTON */}
                        <SignInAndRegisterButton
                            ButtonIcon=''
                            ButtonText='Reset Password'
                            bgColor={{ backgroundColor: '#fcb812' }}
                            spin={loader}
                        />
                    </form>

                    {/*Displaying Messages */}
                    {successMessage &&
                        <Alert className={classes.SuccessMessage} severity="success">
                            Password Changed Successfully.
                            <br />
                            Redirecting in {counter}s
                        </Alert>}

                    {errorMessage && <Alert className={classes.ErrorMessage} severity="error">Sorry! Something Went Wrong.</Alert>}

                    {/* BACK TO LOGIN */}

                    <button className={classes.loginButton} onClick={HandleBackToLogin}>Back To Login</button>

                </DialogContent>
            </Dialog >
        </>
    );
}
export default React.memo(ResetPasswordDialogBox);
