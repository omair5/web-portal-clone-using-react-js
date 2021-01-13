import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import SignInAndRegisterButton from '../FrequentlyUsed/SignInAndRegisterButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import InputTextField from '../FrequentlyUsed/InputTextField';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: "white",
        minHeight: '500px',
        maxWidth: '400px',
        overflow: "hidden"
    },
    IconWithText: {
        display: 'flex'
    },
    connectWith: {
        marginTop: '15px'
    },
    DataPolicy: {
        margin: '10px 0',
        fontSize: '14px',
        color: 'grey'
    },
    AlreadyRegistered: {
        margin: '10px 0px',
        cursor: 'pointer'
    }
});

const RegisterDialogBox = () => {
    const classes = useStyles();
    //    USING STATE FROM STORE
    const RegisterDialogStatus = useSelector(state => state.RegisterDialogStatus)
    const dispatch = useDispatch()
    // THIS STATE IS TO CLOSE DIALOG BOX
    const handleClose = () => {
        dispatch({ type: 'CloseRegisterDialog' })
    };
    const HandleSignIn = () => {
        dispatch({ type: 'CloseRegisterDialog' })
        dispatch({ type: 'OpenSignInDialog' })
    }

    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={RegisterDialogStatus} >
                <DialogContent className={classes.mainContainer}>
                    {/* Register */}
                    <div className={classes.IconWithText}>
                        <p><FontAwesomeIcon icon={faUserAlt} /></p>
                        <p style={{ marginLeft: '5px' }}>Create An Account </p>
                    </div>

                    {/* FOR USERNAME */}
                    <InputTextField
                        TextFieldId='1'
                        TextFieldPlaceHolder='Username'
                        InputType='text'
                    />

                    {/* FOR PASSWORD */}
                    <InputTextField
                        TextFieldId='2'
                        TextFieldPlaceHolder='Password'
                        InputType='password'
                    />

                    {/* DATA POLICY */}
                    <p className={classes.DataPolicy}>
                        Your personal data will be used to support your experience throughout this website,
                        to manage access to your account, and for other purposes described in our privacy policy.
                    </p>

                    {/* SIGN UP BUTTON */}
                    <SignInAndRegisterButton
                        ButtonIcon=''
                        ButtonText='Sign Up'
                        bgColor={{ backgroundColor: '#fcb812' }}
                    />

                    <p className={classes.connectWith}>Or connect with</p>

                    {/* SIGN IN WITH GOOGLE */}
                    <SignInAndRegisterButton
                        ButtonIcon={faGoogle}
                        ButtonText='Sign in with Google'
                        bgColor={{ backgroundColor: '#c71610' }}
                    />

                    {/* SIGN IN WITH FACEBOOK */}
                    <SignInAndRegisterButton
                        ButtonIcon={faFacebookF}
                        ButtonText='Login with Facebook'
                        bgColor={{ backgroundColor: '#3b5998' }}
                    />

                    <p className={classes.AlreadyRegistered} onClick={HandleSignIn}>Already Registered?</p>
                </DialogContent>
            </Dialog>
        </>
    );
}
export default React.memo(RegisterDialogBox);