import React, { useEffect, useState } from 'react';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import { makeStyles } from '@material-ui/core/styles';
import SignInAndRegisterButton from '../FrequentlyUsed/SignInAndRegisterButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'
import InputTextField from '../FrequentlyUsed/InputTextField';
import { useDispatch, useSelector } from 'react-redux';
import AutoCompleteTextField from './AutoCompleteTextField';
import axios from 'axios';

const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: "white",
        minHeight: '750px',
        maxWidth: '400px',
        overflow: "hidden"
    },
    createAccount: {
        marginLeft: '5px',
        fontWeight: 'bolder',
        color: 'rgb(59, 70, 86)'
    },
    IconWithText: {
        display: 'flex',
        "&>p": {
            color: 'rgb(59, 70, 86)'
        }
    },
    connectWith: {
        marginTop: '15px',
        color: 'rgb(59, 70, 86)',
        fontWeight: 'bolder'
    },
    AlreadyRegistered: {
        margin: '10px 0px',
        cursor: 'pointer',
        color: 'rgb(59, 70, 86)',
        fontWeight: 'bolder'
    }
});

const RegisterDialogBox = () => {
    const classes = useStyles();
    //    USING STATE FROM STORE
    const RegisterDialogStatus = useSelector(state => state.RegisterDialogStatus)
    const dispatch = useDispatch()
    // FORM FIELDS STATE
    const [formFields, setformFields] = useState({ fname: '', lname: '', email: '', password: '', cpassword: '', number: '' })
    const [formDropDownField, setformDropDownField] = useState({ country: '', city: '' })
    const [passwordMatchingError, setpasswordMatchingError] = useState(false)


    // THIS FUNCTION WILL CLOSE DIALOG BOX
    const handleClose = () => {
        dispatch({ type: 'CloseRegisterDialog' })
    };
    // THIS FUNCTION WILL HANDLE SIGN IN 
    const HandleSignIn = () => {
        dispatch({ type: 'CloseRegisterDialog' })
        dispatch({ type: 'OpenSignInDialog' })
    }
    // THIS FUNCTION HANDLES FORM INPUT
    const HandleChange = (e) => {
        setformFields({ ...formFields, [e.target.name]: e.target.value })
    }

    const HandleDropDownChange = (e) => {
        const name = e.target.id.split("-")[0]
        setformDropDownField({ ...formDropDownField, [name]: e.target.innerHTML })
    }

    // THIS FUNCTION WILL SUBMIT THE FORM
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formFields.password === formFields.cpassword) {
            const username = `${formFields.fname} ${formFields.lname}`
            const FormData = { username: username, email: formFields.email, password: formFields.password, phone_number: formFields.number, country_id: '2', city_id: '3' }
            console.log(FormData)
            axios.post('http://192.168.18.195:3000/auth/signup', FormData).then(res => console.log(res))
            setformFields({ fname: '', lname: '', email: '', password: '', cpassword: '', number: '' })
            setformDropDownField({ country: '', city: '' })
            setpasswordMatchingError(false)
            console.log('submitted')
        }
        else {
            setpasswordMatchingError(true)
        }

    }

    useEffect(() => { }, [])

    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={RegisterDialogStatus}>
                <div className=" custom-scroll">
                    <DialogContent className={`${classes.mainContainer}`}>
                        {/* Register */}
                        <div className={classes.IconWithText}>
                            <p><FontAwesomeIcon icon={faUserAlt} /></p>
                            <p className={classes.createAccount}>CREATE AN ACCOUNT </p>
                        </div>
                        <form onSubmit={handleSubmit} >
                            {/* FOR FIRST NAME */}
                            <InputTextField
                                TextFieldId='1'
                                TextFieldPlaceHolder='First Name'
                                InputType='text'
                                required={true}
                                // FOR PATTERN WE CAN USE https://www.html5pattern.com/
                                pattern="[a-zA-Z]+"
                                title="This Field Accepts Only Letters"
                                autoComplete={"off"}
                                labelText="FIRST NAME"
                                helperText="Only Letters Are Allowed"
                                autofocus={true}
                                callBack={HandleChange}
                                value={formFields.fname}
                                name='fname'
                                passwordVisibility={false}
                            />

                            {/* FOR LAST NAME */}
                            <InputTextField
                                TextFieldId='2'
                                TextFieldPlaceHolder='Last Name'
                                InputType='text'
                                required={true}
                                pattern="[a-zA-Z]+"
                                title="This Field Accepts Only Letters"
                                autoComplete={"off"}
                                labelText="LAST NAME"
                                helperText="Only Letters Are Allowed"
                                autofocus={false}
                                callBack={HandleChange}
                                value={formFields.lname}
                                name='lname'
                                passwordVisibility={false}
                            />

                            {/* FOR EMAIL */}
                            <InputTextField
                                TextFieldId='3'
                                TextFieldPlaceHolder='Email'
                                InputType='email'
                                required={true}
                                autoComplete={"off"}
                                labelText="EMAIL"
                                autofocus={false}
                                callBack={HandleChange}
                                value={formFields.email}
                                name='email'
                                passwordVisibility={false}
                            />
                            {/* FOR COUNTRY */}
                            <AutoCompleteTextField
                                id='country'
                                label="COUNTRY"
                                style={{ margin: '10px 0px' }}
                                callBack={HandleDropDownChange}
                                val={formDropDownField.country}
                            />

                            {/* FOR CITY */}
                            <AutoCompleteTextField
                                id='city'
                                label="CITY"
                                style={{ margin: '10px 0px' }}
                                callBack={HandleDropDownChange}
                                val={formDropDownField.city}
                            />

                            {/* FOR PASSWORD */}
                            <InputTextField
                                TextFieldId='4'
                                TextFieldPlaceHolder='Password'
                                InputType='password'
                                required={true}
                                labelText="PASSWORD"
                                autofocus={false}
                                callBack={HandleChange}
                                value={formFields.password}
                                name='password'
                                passwordVisibility={true}
                            />

                            {/* FOR CONFIRM PASSWORD */}
                            <InputTextField
                                TextFieldId='5'
                                TextFieldPlaceHolder='Confirm Password'
                                InputType='password'
                                required={true}
                                labelText="CONFIRM PASSWORD"
                                autofocus={false}
                                callBack={HandleChange}
                                value={formFields.cpassword}
                                name='cpassword'
                                passwordVisibility={true}
                                helperText={passwordMatchingError ? 'password does not match' : null}
                                error={passwordMatchingError}

                            />

                            {/* FOR PHONE NUMBER */}
                            <InputTextField
                                TextFieldId='6'
                                TextFieldPlaceHolder='xxxx-xxxxxxx'
                                InputType='tel'
                                required={true}
                                autoComplete={"off"}
                                title="e.g : 0331-1234567"
                                pattern="[0-9]{4}-[0-9]{7}"
                                labelText="PHONE NUMBER"
                                helperText="Only Numbers Are Allowed In Requested Format"
                                autofocus={false}
                                callBack={HandleChange}
                                value={formFields.number}
                                name='number'
                                passwordVisibility={false}
                            />

                            {/* SIGN UP BUTTON */}
                            <SignInAndRegisterButton
                                ButtonIcon=''
                                ButtonText='Sign Up'
                                bgColor={{ backgroundColor: '#fcb812' }}
                            />
                        </form>

                        <p className={classes.connectWith}>Or connect with</p>

                        {/* SIGN IN WITH GOOGLE */}
                        <SignInAndRegisterButton
                            ButtonIcon={faGoogle}
                            ButtonText='Register with Google'
                            bgColor={{ backgroundColor: '#c71610' }}
                        />

                        {/* SIGN IN WITH FACEBOOK */}
                        <SignInAndRegisterButton
                            ButtonIcon={faFacebookF}
                            ButtonText='Register with Facebook'
                            bgColor={{ backgroundColor: '#3b5998' }}
                        />

                        <p className={classes.AlreadyRegistered} onClick={HandleSignIn}>Already Registered?</p>
                    </DialogContent>
                </div>
            </Dialog>
        </>
    );
}
export default React.memo(RegisterDialogBox);