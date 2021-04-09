let initialstate = true
const FrequentlyUsed_Reset_Password = (state = initialstate, action) => {
    switch (action.type) {
        case 'open_reset_pasword_dialog':
            return true
        case 'close_reset_pasword_dialog':
            return false
        default:
            return state
    }
}
export default FrequentlyUsed_Reset_Password;