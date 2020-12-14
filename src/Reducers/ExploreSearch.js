let windowWidth = window.innerWidth
let initialstate = windowWidth > 960 ? true : false;
const ExploreSearch = (state = initialstate, action) => {
    switch (action.type) {
        case 'searchToggle':
            return action.payload
        default:
            return state
    }
}
export default ExploreSearch;