import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { GoogleLogin } from 'react-google-login';
import { makeStyles } from '@material-ui/core/styles';
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

    const onGmailSuccess = (res) => {
        console.log(res)
        const google_login_data = {
            imageurl: res.profileObj.imageUrl,
            username: res.profileObj.name,
            email: res.profileObj.email,
        }
        console.log(google_login_data)
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
            </div>
        </>
    );
}
export default React.memo(GoogleRegisteration);