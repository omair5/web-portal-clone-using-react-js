let initialstate = false
const FrequentlyUsed_Failure_PopUpMessage = (state = initialstate, action) => {
    switch (action.type) {
        case 'open_FrequentlyUsed_Failure_PopUpMessage':
            return true
        case 'close_FrequentlyUsed_Failure_PopUpMessage':
            return false
        default:
            return state
    }
}
export default FrequentlyUsed_Failure_PopUpMessage;