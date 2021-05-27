import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { GoogleLogin } from 'react-google-login';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FailurePopUpMessage from './FailurePopUpMessage'
import axios from 'axios';


const useStyles = makeStyles({
    googleButton: {
        margin: '10px 0px',
        padding: '15px 0px',
        width: '100%',
        color: 'white',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        opacity: '0.9',
        backgroundColor: '#c71610',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '13px',
        "&:hover": {
            opacity: '1',
        }
    }
});


const GoogleRegisteration = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const onGmailSuccess = (res) => {
        console.log(res)
        const google_login_data = {
            imageurl: res.profileObj.imageUrl,
            username: res.profileObj.name,
            email: res.profileObj.email,
        }
        console.log(google_login_data)
        axios.post('http://localhost:3200/auth/socialsignup', google_login_data).then((res) => {
            if (res.status === 201) {
                localStorage.setItem('secretkey', res.data.user)
                localStorage.setItem('username', res.data.name)
                // to close sigin dialog box
                dispatch({ type: 'CloseSignInDialog' })
                // telling our code that we have a authorized user logged in
                dispatch({ type: 'set_authorized_user' })
                // getting username to show on navbar
                dispatch({ type: 'authorized_user_name', payload: res.data.name })
                // to redirect to add property page
                history.push('/add-property')
            }
            else {
                dispatch({ type: 'open_FrequentlyUsed_Failure_PopUpMessage' })
            }
        }).catch((err) => console.log(err))
    }

    const onGmailFaiure = (res) => {
        console.log(res)
    }
    return (
        <>
            {/* SIGN IN WITH GOOGLE */}
            <div>
                <GoogleLogin
                    clientId="11723252692-jrnhnb8fqk9n0hb5e1kql2672r23jen7.apps.googleusercontent.com"
                    onSuccess={onGmailSuccess}
                    onFailure={onGmailFaiure}
                    cookiePolicy={'single_host_origin'}
                    render={renderProps => (
                        <div onClick={renderProps.onClick} disabled={renderProps.disabled} className={classes.googleButton}>
                            <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '7px' }} />
                             Login With Google
                        </div>
                    )}
                />
                {/* FAILURE MESSAGE */}
                <FailurePopUpMessage
                    heading={'OOPS! SORRY SOMETHING WENT WRONG'}
                    color={'red'}
                    message={'Dear User, We Apoligize For The inconvenience! Servers Are Not Responding At This Moment Please Try Later'}
                />
            </div>
        </>
    );
}
export default React.memo(GoogleRegisteration);