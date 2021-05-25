import React from 'react';
import SignInAndRegisterButton from '../FrequentlyUsed/SignInAndRegisterButton';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { makeStyles } from '@material-ui/core/styles';
import { Email } from '@material-ui/icons';


const useStyles = makeStyles({
    facebookButton: {
        margin: '10px 0px',
        padding: '15px 0px',
        width: '100%',
        color: 'white',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        opacity: '0.9',
        "&:hover": {
            opacity: '1',
        }
    }
});



const SocialMediaSignInSignUp = () => {
    const classes = useStyles();

    // localhost:3200/auth/socialsignup
    // username
    // email
    // imageurl


    const onGmailSuccess = (res) => {
        console.log(res)

    }

    const onGmailFaiure = (res) => {
        console.log(res)
    }

    const responseFacebook = (response) => {
        console.log(response)
    }

    return (
        <>
            {/* SIGN IN WITH GOOGLE */}
            <div>
                <GoogleLogin
                    clientId="11723252692-jrnhnb8fqk9n0hb5e1kql2672r23jen7.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={onGmailSuccess}
                    onFailure={onGmailFaiure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>

            {/* SIGN IN WITH FACEBOOK */}
            <div>
                <FacebookLogin
                    appId="2979764298937344"
                    fields="name,email,picture"
                    callback={responseFacebook}
                    cssClass="my-facebook-button-class"
                // icon={<TiSocialFacebookCircular />}
                />
            </div>




            {/* <SignInAndRegisterButton
                ButtonIcon={faFacebookF}
                ButtonText='Register with Facebook'
                bgColor={{ backgroundColor: '#3b5998' }} */}
            {/* // onClick={HandleFacebookSignIn}

            /> */}
        </>
    );
}
export default SocialMediaSignInSignUp;