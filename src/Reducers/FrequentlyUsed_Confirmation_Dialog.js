let initialstate = false
const FrequentlyUsed_Confirmation_Dialog = (state = initialstate, action) => {
    switch (action.type) {
        case 'open_confirmation_email_dialog':
            return true
        case 'close_confirmation_email_dialog':
            return false
        default:
            return state
    }
}
export default FrequentlyUsed_Confirmation_Dialog;