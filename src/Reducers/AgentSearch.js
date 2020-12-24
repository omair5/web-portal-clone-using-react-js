let windowWidth = window.innerWidth
let initialstate = windowWidth > 960 ? true : false;
const AgentSearch = (state = initialstate, action) => {
    switch (action.type) {
        case 'AgentSearchToggle':
            return action.payload
        default:
            return state
    }
}
export default AgentSearch;