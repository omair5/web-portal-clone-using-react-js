import React from 'react';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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

    const responseFacebook = (res) => {
        console.log(res)
        const google_login_data = {
            imageurl: res.picture.data.url,
            username: res.name,
            email: res.email,
        }
        console.log(google_login_data)
        axios.post('http://localhost:3200auth/socialsignup', google_login_data).then((res) => {
            console.log(res)
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
            </div>
        </>
    );
}
export default SocialMediaSignInSignUp;