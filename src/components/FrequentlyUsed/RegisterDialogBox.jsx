import React, { useEffect, useState, useRef } from 'react';
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
import RegisterCountryApi from '../../Services/RegisterCountryApi'
import RegisterGetCities from '../../Services/RegisterGetCities';
import ConfirmationEmailDialog from './ConfirmationEmailDialog';

const useStyles = makeStyles({
    mainContainer: {
        backgroundColor: "white",
        minHeight: '750px',
        maxWidth: '400px',
        overflow: "hidden",
        "& h4": {
            textAlign: 'center',
            padding: '10px 0px',
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
        fontSize: '35px'
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
    },
    AlreadyExist: {
        color: 'red',
        textAlign: 'center',
    }
});

const RegisterDialogBox = () => {
    const classes = useStyles();
    const mounted = useRef(true);
    // --------------------STATES

    //    USING STATE FROM STORE
    const RegisterDialogStatus = useSelector(state => state.RegisterDialogStatus)
    const dispatch = useDispatch()
    // FORM FIELDS 
    const [formFields, setformFields] = useState({ fname: '', lname: '', email: '', password: '', cpassword: '', number: '' })
    // FOR CHECKING PASSWORD MATCH
    const [passwordMatchingError, setpasswordMatchingError] = useState(false)
    // FOR COUNTRIES
    const [countries, setcountries] = useState([])
    // FOR CITIES
    const [cities, setcities] = useState([])
    // FOR SHOWING CITY FIELD
    const [showCity, setshowCity] = useState(false)
    // FOR AUTOCOMPLETE TEXTFIELD CONTROLLED VALUE
    const [formDropDownField, setformDropDownField] = useState({ country: null, city: null })
    // LOADER 
    const [loader, setloader] = useState(false)
    // EMAIL ALREADY EXIST
    const [emailAlreadyExist, setemailAlreadyExist] = useState(false)

    useEffect(() => {
        mounted.current = true;
        async function CountryApiRegister() {
            if (mounted.current) {
                setcountries(await RegisterCountryApi())
            }
        }
        CountryApiRegister()
        // cancel subscription to useEffect
        return () => mounted.current = false;
    }, [])

    // --------------------HANDLE CALLBACKS

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
    // THIS FUNCTION HANDLES DROPDOWN VALUES
    const HandleDropDownValue = (event, newValue) => {
        const key = event.target.id.split('-')[0]
        if (newValue === 'Pakistan') {
            setshowCity(true)
            async function GetCitiesRegister() {
                setcities(await RegisterGetCities())
            }
            GetCitiesRegister()
        }
        setformDropDownField({ ...formDropDownField, [key]: newValue })
    }
    // THIS FUNCTION WILL SUBMIT THE FORM
    const handleSubmit = (e) => {
        e.preventDefault();
        setloader(true)
        if (formFields.password === formFields.cpassword) {
            const username = `${formFields.fname} ${formFields.lname}`
            const FormData = { user_name: username, email: formFields.email, password: formFields.password, phone_number: formFields.number, city: formDropDownField.city, country: formDropDownField.country }
            axios.post('http://localhost:3200/auth/signup', FormData)
                .then(res => {
                    if (mounted.current) {
                        setloader(false)
                        console.log(res)
                        if (res.data.status === 201 || res.data.message === 'Please cheak your Email') {
                            setformFields({ fname: '', lname: '', email: '', password: '', cpassword: '', number: '' })
                            setformDropDownField({ country: null, city: null })
                            setpasswordMatchingError(false)
                            setshowCity(false)
                            setemailAlreadyExist(false)
                            dispatch({ type: 'open_confirmation_email_dialog' })
                            dispatch({ type: 'CloseRegisterDialog' })
                        }
                        else if (res.data.status === 409) {
                            setemailAlreadyExist(true)
                        }
                    }
                })
        }
        else {
            setloader(false)
            setpasswordMatchingError(true)
        }
    }

    return (
        <>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={RegisterDialogStatus}>
                <div className="custom-scroll">
                    <DialogContent className={`${classes.mainContainer}`}>
                        {/* Register */}
                        <div className={classes.iconContainer}>
                            <FontAwesomeIcon icon={faUserAlt} className={classes.icon} />
                        </div>
                        <h4 >CREATE AN ACCOUNT</h4>
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
                                value={formDropDownField.country}
                                onChange={HandleDropDownValue}
                                required={true}
                                options={countries}
                            />

                            {/* FOR CITY */}
                            {showCity ?
                                <AutoCompleteTextField
                                    id='city'
                                    label="CITY"
                                    style={{ margin: '10px 0px' }}
                                    value={formDropDownField.city}
                                    onChange={HandleDropDownValue}
                                    required={true}
                                    options={cities}
                                /> : null}

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
                                helperText=" The password must be at least 4 characters long, but no more than 20"
                                pattern='.{4,32}'
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

                            {emailAlreadyExist && <p className={classes.AlreadyExist}>The Email You Are Using To Sign Up Already Exist</p>}

                            {/* SIGN UP BUTTON */}
                            <SignInAndRegisterButton
                                ButtonIcon=''
                                ButtonText='Sign Up'
                                bgColor={{ backgroundColor: '#fcb812' }}
                                spin={loader}
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
            <ConfirmationEmailDialog />
        </>
    );
}
export default React.memo(RegisterDialogBox);