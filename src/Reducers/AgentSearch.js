let windowWidth = window.innerWidth
let initialstate = windowWidth > 960 ? true : false;
const AgentSearch = (state = initialstate, action) => {
    switch (action.type) {
        case 'AgentSearchToggle':
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
export default AgentSearch;