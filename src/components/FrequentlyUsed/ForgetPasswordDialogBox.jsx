import React, { useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import InputTextField from './InputTextField';
import SignInAndRegisterButton from './SignInAndRegisterButton';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import axios from 'axios';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles({
    mainContainer: {
        padding: '20px 25px',
        maxWidth: '320px',
        "& h4": {
            textAlign: 'center',
            padding: '15px 0px',
            color: 'rgb(83, 90, 89)'
        }
    },
    iconContainer: {
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid rgb(83, 90, 89)',
        margin: '10px auto'
    },
    icon: {
        color: 'rgb(83, 90, 89)',
        fontSize: '40px'
    },
    para: {
        color: 'gray',
        padding: '10px 0px'
    },
    createAccount: {
        cursor: 'pointer'
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
    }
});

const ForgetPasswordDialogBox = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const ForgetPasswordBox = useSelector(state => state.FrequentlyUsed_Forget_Password)
    const [email, setemail] = useState('')
    const [loader, setloader] = useState(false)
    const [successMessage, setsuccessMessage] = useState(false)
    const [errorMessage, seterrorMessage] = useState(false)

    // THIS STATE IS TO CLOSE DIALOG BOX
    const handleClose = () => {
        dispatch({ type: 'close_forget_pasword_dialog' })
    };

    const HandleOpenRegisterDialog = () => {
        dispatch({ type: 'close_forget_pasword_dialog' })
        dispatch({ type: 'OpenRegisterDialog' })
    }

    const HandleInputChange = (e) => {
        setemail(e.target.value)
    }

    // HANDLE FORM SUBMIT
    const HandleSubmit = (e) => {
        e.preventDefault();
        setloader(true)
        setsuccessMessage(false)
        seterrorMessage(false)
        const FormData = { email: email }
        axios.post('http://localhost:3200/auth/Forgetemail', FormData).then((response) => {
            setloader(false)
            setemail('')
            if (!response.data.status) {
                setsuccessMessage(true)
            }
            else {
                seterrorMessage(true)
            }
        }).catch((error) => console.log(error))
    }

    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={ForgetPasswordBox} >
                <DialogContent className={classes.mainContainer}>
                    <div className={classes.iconContainer}>
                        <LockRoundedIcon className={classes.icon} />
                    </div>
                    <h4 >Trouble Logging In?</h4>
                    <p className={classes.para}>Enter your email, we'll send you a link to get back into your account.</p>
                    <form onSubmit={HandleSubmit}>
                        {/* EMAIL */}
                        <InputTextField
                            TextFieldId='1'
                            TextFieldPlaceHolder='Enter Your Email'
                            InputType='email'
                            callBack={HandleInputChange}
                            value={email}
                            outlined="outlined"
                            required={true}
                        />

                        {/* SIGN IN BUTTON */}
                        <SignInAndRegisterButton
                            ButtonIcon=''
                            ButtonText='Send Login Link'
                            bgColor={{ backgroundColor: '#fcb812' }}
                            spin={loader}
                        />

                        {/*Displaying Messages */}
                        {successMessage && <Alert className={classes.SuccessMessage} severity="success">Password Reset Link Has Been Sent To The Specified Email Address.</Alert>}
                        {errorMessage && <Alert className={classes.ErrorMessage} severity="error">Invalid Email OR Email Does'nt Exist.</Alert>}

                    </form>
                    <h4>OR</h4>
                    <h4 onClick={HandleOpenRegisterDialog} className={classes.createAccount}>Create New Account</h4>
                </DialogContent>
            </Dialog >
        </>
    );
}
export default React.memo(ForgetPasswordDialogBox);