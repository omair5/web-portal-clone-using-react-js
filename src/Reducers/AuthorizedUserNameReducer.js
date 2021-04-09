let initialstate = ''
const AuthorizedUserNameReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'remove_authorized_user_name':
            return ''
        case 'authorized_user_name':
            return action.payload
        default:
            return state
    }
}
export default AuthorizedUserNameReducer;