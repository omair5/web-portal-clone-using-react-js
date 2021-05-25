let initialstate = false
const FrequentlyUsed_PopUpMessage = (state = initialstate, action) => {
    switch (action.type) {
        case 'open_FrequentlyUsed_PopUpMessage':
            return true
        case 'close_FrequentlyUsed_PopUpMessage':
            return false
        default:
            return state
    }
}
export default FrequentlyUsed_PopUpMessage;