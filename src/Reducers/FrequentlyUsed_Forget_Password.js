let initialstate = false
const FrequentlyUsed_Forget_Password = (state = initialstate, action) => {
    switch (action.type) {
        case 'open_forget_pasword_dialog':
            return true
        case 'close_forget_pasword_dialog':
            return false
        default:
            return state
    }
}
export default FrequentlyUsed_Forget_Password;