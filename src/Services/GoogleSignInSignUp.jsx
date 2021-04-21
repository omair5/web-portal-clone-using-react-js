const apiURL = `http://localhost:3200/auth/google`
async function GoogleSignInSignUp_Request() {
    const response = await fetch(apiURL)
    console.log(response.json())
}
export default GoogleSignInSignUp_Request;