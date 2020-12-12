const initialstate = true
const ExploreSearch = (state = initialstate, action) => {
    switch (action.type) {
        case 'cardToggle':
            return action.payload
        default:
            return state
    }
}
export default ExploreSearch;