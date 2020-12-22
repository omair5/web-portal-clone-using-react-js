const initialstate = true
const DeveloperCards = (state = initialstate, action) => {
    switch (action.type) {
        case 'DeveloperCardToggle':
            return action.payload
        default:
            return state
    }
}
export default DeveloperCards;