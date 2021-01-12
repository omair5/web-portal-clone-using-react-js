import React from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import SignInAndRegisterButton from '../FrequentlyUsed/SignInAndRegisterButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUserAlt, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import InputTextField from '../FrequentlyUsed/InputTextField';
import { useDispatch, useSelector } from 'react-redux';

const useStylesCheckBox = makeStyles(theme => ({
    root: {
        "& .MuiCheckbox-colorSecondary.Mui-checked": {
            color: '#fcb812',
            fontSize: '30px'
        },
        "& .MuiTypography-body1 ": {
            fontSize: '15px'
        },
    },
}));

const useStyles = makeStyles({
    sigin: {
        textDecoration: 'none',
        color: 'white',
        padding: '1rem',
        cursor: 'pointer',
        "&:hover": {
            color: 'black'
        }
    },
    mainContainer: {
        backgroundColor: "white",
        minHeight: '500px',
        maxWidth: '400px',
        overflow:"hidden"
    },
    connectWith: {
        marginTop: '15px'
    },
    IconWithText: {
        display: 'flex'
    },
    footer: {
        padding: '5px 0px',
        margin: '5px 0px',
        cursor: 'pointer'
    },
    checkBox: {
        color: "#fcb812",
        fontSize: '20px'
    }
});

const SignInDialogBox = () => {
    const classesCheckBox = useStylesCheckBox();
    const classes = useStyles();

    //    USING STATE FROM STORE
    const SignInDialogStatus = useSelector(state => state.SignInDialogStatus)
    const dispatch = useDispatch()

    // THIS STATE IS TO CLOSE DIALOG BOX
    const handleClose = () => {
        dispatch({type:'CloseSignInDialog'})
    };
    // THIS IS FOR CHECKBOX
    const [state, setState] = React.useState({
        checkedA: true,
    });
    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={SignInDialogStatus} >
                <DialogContent className={classes.mainContainer}>
                    {/* sig in */}
                    <div className={classes.IconWithText}>
                        <p><FontAwesomeIcon icon={faUserAlt} /></p>
                        <p style={{ marginLeft: '5px' }}>sign in </p>
                    </div>

                    {/* FOR USERNAME */}
                    <InputTextField
                        TextFieldId='1'
                        TextFieldPlaceHolder='Username'
                    />

                    {/* FOR PASSWORD */}
                    <InputTextField
                        TextFieldId='2'
                        TextFieldPlaceHolder='Password'
                    />

                    {/* SIGN IN BUTTON */}
                    <SignInAndRegisterButton
                        ButtonIcon=''
                        ButtonText='Sign in'
                        bgColor={{ backgroundColor: '#fcb812' }}
                    />

                    {/* REMEMBER ME CHECKIN BOX */}
                    <div>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" style={{ transform: "scale(1.5)" }} />}
                            label="Remember me"
                            classes={classesCheckBox}
                        />
                    </div>

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

                    {/* FOOTER */}
                    <div className={`${classes.IconWithText} ${classes.footer}`}>
                        <p><FontAwesomeIcon icon={faUser} /></p>
                        <p style={{ marginLeft: '5px' }}>Don't Have An Account?</p>
                    </div>

                    <div className={`${classes.IconWithText} ${classes.footer}`}>
                        <p><FontAwesomeIcon icon={faLock} /></p>
                        <p style={{ marginLeft: '5px' }}>Forgot password?</p>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
export default React.memo(SignInDialogBox);