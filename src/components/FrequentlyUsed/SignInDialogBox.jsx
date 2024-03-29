import React, { useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { makeStyles } from '@material-ui/core/styles';
import SignInAndRegisterButton from '../FrequentlyUsed/SignInAndRegisterButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserAlt, faUser, faLock } from '@fortawesome/free-solid-svg-icons'
import InputTextField from '../FrequentlyUsed/InputTextField';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import ForgetPasswordDialogBox from './ForgetPasswordDialogBox';
import GoogleRegisteration from './GoogleRegisteration'
import FacebookRegisteration from './FacebookRegisteration'
import Typography from '@material-ui/core/Typography';



// const useStylesCheckBox = makeStyles(theme => ({
//     root: {
//         "& .MuiCheckbox-colorSecondary.Mui-checked": {
//             color: '#fcb812',
//             fontSize: '30px'
//         },
//         "& .MuiTypography-body1 ": {
//             fontSize: '15px'
//         },
//     },
// }));

const useStyles = makeStyles((theme) => ({
    mainContainer: {
        backgroundColor: "white",
        minHeight: 'auto',
        minWidth: '410px',
        overflow: "auto",
        [theme.breakpoints.down('md')]: {
            minWidth: '285px',
        },
    },
    createAccount: {
        marginLeft: '5px',
        paddingBottom: '10px',
        color: 'rgb(83, 90, 89)'
    },
    error: {
        color: 'red',
        textAlign: 'center'
    },
    connectWith: {
        marginTop: '15px',
        color: 'rgb(83, 90, 89)',
        fontWeight: 'bold'
    },
    IconWithText: {
        display: 'flex',
        "& p": {
            color: 'rgb(59, 70, 86)',
            fontWeight: 'bolder',
        }
    },
    footer: {
        padding: '5px 0px',
        margin: '5px 0px',
        cursor: 'pointer'
    },
    checkBox: {
        color: "#fcb812",
        fontSize: '20px'
    },
    check: {
        color: '#fcb812'
    }
}));

const SignInDialogBox = () => {
    // const classesCheckBox = useStylesCheckBox();
    const classes = useStyles();

    //    USING STATE FROM STORE
    const SignInDialogStatus = useSelector(state => state.SignInDialogStatus)
    const dispatch = useDispatch()
    const history = useHistory()
    const [signinData, setsigninData] = useState({ email: '', password: '' })
    const [showError, setshowError] = useState(false)
    const [errorMessage, seterrorMessage] = useState('')
    const [loader, setloader] = useState(false)
    const [agent, setAgent] = useState(false)


    // THIS STATE IS TO CLOSE DIALOG BOX
    const handleClose = () => {
        dispatch({ type: 'CloseSignInDialog' })
    };
    // TO OPEN REGISTER DIALOG OnClick on DONT HAVE AN ACCOUNT
    const HandleRegister = () => {
        dispatch({ type: 'CloseSignInDialog' })
        dispatch({ type: 'OpenRegisterDialog' })
    }
    // THIS IS FOR CHECKBOX
    // const [state, setState] = React.useState({
    //     checkedA: true,
    // });
    // const handleChange = (event) => {
    //     setState({ ...state, [event.target.name]: event.target.checked });
    // };

    // HANDLE INPUT CHANGE
    const HandleInputChange = (e) => {
        setsigninData({ ...signinData, [e.target.name]: e.target.value })
    }

    const HandleSubmit = (e) => {
        e.preventDefault();
        setshowError(false)
        setloader(true)
        axios.post('http://localhost:3200/auth/signin', signinData)
            .then((response) => {
                console.log(response)
                setloader(false)
                if (response.data.accessToken) {
                    localStorage.setItem('secretkey', response.data.accessToken)
                    localStorage.setItem('username', response.data.findname)
                    localStorage.setItem('user_email', JSON.parse(response.config.data).email)
                    // to close sigin dialog box
                    dispatch({ type: 'CloseSignInDialog' })
                    //    telling our code that we have a authorized user logged in
                    dispatch({ type: 'set_authorized_user' })
                    // getting username to show on navbar
                    dispatch({ type: 'authorized_user_name', payload: response.data.findname })
                    // to redirect to add property page
                    history.push(history.location)

                }
                else {
                    setshowError(true)
                    seterrorMessage(response.data.response.message)
                }
            })
    }

    const HandleForgetPassword = () => {
        dispatch({ type: 'open_forget_pasword_dialog' })
        dispatch({ type: 'CloseSignInDialog' })
    }

    const handleCheck = (e) => {
        setAgent(e.target.checked)
    }


    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={SignInDialogStatus} >
                <div className="custom-scroll">
                    <DialogContent className={classes.mainContainer}>
                        {/* sign in */}
                        <div className={classes.IconWithText}>
                            <p><FontAwesomeIcon icon={faUserAlt} /></p>
                            <p className={classes.createAccount}>SIGN IN</p>
                        </div>

                        {/* FOR Email */}
                        <form onSubmit={HandleSubmit}>
                            <InputTextField
                                TextFieldId='1'
                                TextFieldPlaceHolder='Email'
                                InputType='email'
                                callBack={HandleInputChange}
                                name='email'
                                value={signinData.email}
                                outlined="outlined"
                                autofocus={true}
                            />

                            {/* FOR PASSWORD */}
                            <InputTextField
                                TextFieldId='2'
                                TextFieldPlaceHolder='Password'
                                InputType='password'
                                callBack={HandleInputChange}
                                name='password'
                                value={signinData.password}
                                outlined="outlined"
                                passwordVisibility={true}
                            />

                            {/* CHECKING FOR AN AGENT */}
                            <FormControlLabel
                                control={<Checkbox checked={agent} onChange={handleCheck} name='Gas' disableRipple={true} icon={<CheckBoxOutlineBlankIcon fontSize="large" />} checkedIcon={<CheckBoxIcon fontSize="large" className={classes.check} />} />}
                                label={<Typography variant="h6" style={{ color: 'rgb(76, 84, 85)', fontWeight: 'bold' }}>Are You A Real Estate Agent?</Typography>}
                            />

                            {showError && <p className={classes.error}>{errorMessage}</p>}

                            {/* SIGN IN BUTTON */}
                            <SignInAndRegisterButton
                                ButtonIcon=''
                                ButtonText='Sign in'
                                bgColor={{ backgroundColor: '#fcb812' }}
                                spin={loader}
                            />
                        </form>

                        {/* REMEMBER ME CHECKIN BOX */}
                        {/* <div>
                        <FormControlLabel
                            control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" style={{ transform: "scale(1.5)" }} />}
                            label="Remember me"
                            classes={classesCheckBox}
                        />
                    </div> */}

                        <p className={classes.connectWith}>Or connect with</p>

                        {/* SIGN IN WITH GOOGLE */}
                        <GoogleRegisteration />

                        {/* SIGN IN WITH FACEBOOK */}
                        <FacebookRegisteration />

                        {/* FOOTER */}
                        <div className={`${classes.IconWithText} ${classes.footer}`}>
                            <p><FontAwesomeIcon icon={faUser} /></p>
                            <p style={{ marginLeft: '5px' }} onClick={HandleRegister}>Don't Have An Account?</p>
                        </div>

                        <div className={`${classes.IconWithText} ${classes.footer}`}>
                            <p><FontAwesomeIcon icon={faLock} /></p>
                            <p style={{ marginLeft: '5px' }} onClick={HandleForgetPassword}>Forgot password?</p>
                        </div>
                    </DialogContent>
                </div>
            </Dialog>
            <ForgetPasswordDialogBox />
        </>
    );
}
export default React.memo(SignInDialogBox);