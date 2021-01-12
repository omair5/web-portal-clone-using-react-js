const initialstate = false
const SignInDialog = (state = initialstate, action) => {
    switch (action.type) {
        case 'OpenSignInDialog':
            return true
        case 'CloseSignInDialog':
            return false
        default:
            return state
    }
}
export default SignInDialog;