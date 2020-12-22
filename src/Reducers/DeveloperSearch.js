let windowWidth = window.innerWidth
let initialstate = windowWidth > 960 ? true : false;
const DeveloperSearch = (state = initialstate, action) => {
    switch (action.type) {
        case 'DeveloperSearchToggle':
            return action.payload
        default:
            return state
    }
}
export default DeveloperSearch;