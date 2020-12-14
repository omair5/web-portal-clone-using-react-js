const initialstate = true
const ExploreCards = (state = initialstate, action) => {
    switch (action.type) {
        case 'cardToggle':
            return action.payload
        default:
            return state
    }
}
export default ExploreCards;