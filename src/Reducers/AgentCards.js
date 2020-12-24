const initialstate = true
const AgentCards = (state = initialstate, action) => {
    switch (action.type) {
        case 'AgentCardToggle':
            return action.payload
        default:
            return state
    }
}
export default AgentCards;