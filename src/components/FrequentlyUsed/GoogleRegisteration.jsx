import React from 'react';
import SignInAndRegisterButton from './SignInAndRegisterButton';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { GoogleLogin } from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';




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


const GoogleRegisteration = () => {
    const classes = useStyles();

    const onGmailSuccess = (res) => {
        console.log(res)
        const google_login_data = {
            username: res.Ft.Ve,
            email: res.Ft.pu,
            imageurl: res.profileObj.imageUrl,
        }
        axios.post('http://localhost:3200auth/socialsignup', google_login_data).then((res) => {
            console.log(res)
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
                    buttonText="Login"
                    onSuccess={onGmailSuccess}
                    onFailure={onGmailFaiure}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </>
    );
}
export default React.memo(GoogleRegisteration);