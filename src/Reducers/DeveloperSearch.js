let windowWidth = window.innerWidth
let initialstate = windowWidth > 960 ? true : false;
const DeveloperSearch = (state = initialstate, action) => {
    switch (action.type) {
        case 'DeveloperSearchToggle':
            if (windowWidth > 960) {
                return (!action.payload)
            }
            else {
                return action.payload
            }
        default:
            return state
    }
}
export default DeveloperSearch;