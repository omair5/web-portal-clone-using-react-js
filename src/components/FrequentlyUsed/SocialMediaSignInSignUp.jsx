import React from 'react';
import SignInAndRegisterButton from '../FrequentlyUsed/SignInAndRegisterButton';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons'
import GoogleSignInSignUp_Request from '../../Services/GoogleSignInSignUp';


const SocialMediaSignInSignUp = () => {

    const HandleGoogleSignIn = () => {
        async function Request_GoogleSignInSignUp() {
            await GoogleSignInSignUp_Request()
        }
        Request_GoogleSignInSignUp().catch(err => console.log(err))
    }

    // const HandleFacebookSignIn = () => {
    //     console.log('facebook')

    // }

    return (
        <>
            {/* SIGN IN WITH GOOGLE */}
            <SignInAndRegisterButton
                ButtonIcon={faGoogle}
                ButtonText='Register with Google'
                bgColor={{ backgroundColor: '#c71610' }}
                onClick={HandleGoogleSignIn}
            />

            {/* SIGN IN WITH FACEBOOK */}
            <SignInAndRegisterButton
                ButtonIcon={faFacebookF}
                ButtonText='Register with Facebook'
                bgColor={{ backgroundColor: '#3b5998' }}
            // onClick={HandleFacebookSignIn}

            />
        </>
    );
}
export default SocialMediaSignInSignUp;