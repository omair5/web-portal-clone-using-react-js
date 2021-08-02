import React from 'react';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import FailurePopUpMessage from './FailurePopUpMessage'
import axios from 'axios';

const useStyles = makeStyles({
    facebookButton: {
        margin: '10px 0px',
        padding: '15px 0px',
        width: '100% !impoetant',
        color: 'white',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        opacity: '0.9',
        backgroundColor: '#3b5998',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '13px !important',
        "&:hover": {
            opacity: '1',
        }
    }
});


const SocialMediaSignInSignUp = () => {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const responseFacebook = (res) => {
        console.log('this is response', res)
        try {
            var google_login_data = {
                imageurl: res.picture.data.url,
                username: res.name,
                email: res.email,
            }
            console.log(google_login_data)
        }
        catch {
            console.log('unknown behavior')
        }


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

    return (
        <>
            {/* SIGN IN WITH FACEBOOK */}
            <div>
                <FacebookLogin
                    appId="2979764298937344"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    render={renderProps => (
                        <div onClick={renderProps.onClick} className={classes.facebookButton}>
                            <FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '7px' }} />
                            Login With Facebook
                        </div>
                    )}
                    icon={<FontAwesomeIcon icon={faFacebookF} style={{ marginRight: '7px' }} />}
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
export default SocialMediaSignInSignUp;