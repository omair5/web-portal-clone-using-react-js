const initialstate = false
const RegisterDialog = (state = initialstate, action) => {
    switch (action.type) {
        case 'OpenRegisterDialog':
            return true
        case 'CloseRegisterDialog':
            return false
        default:
            return state
    }
}
export default RegisterDialog;