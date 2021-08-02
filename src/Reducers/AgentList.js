const initialState = []
const AgentList = (state = initialState, action) => {

    switch (action.type) {
        case 'set_agent_list':
            return action.payload
        case 'clear_agent_list':
            return []
        default:
            return state
    }
}
export default AgentList;