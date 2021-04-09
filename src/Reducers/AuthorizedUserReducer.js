let initialstate = false
const AuthorizedUserReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_authorized_user':
            return true
        case 'clear_authorized_user':
            return false
        default:
            return state
    }
}
export default AuthorizedUserReducer;