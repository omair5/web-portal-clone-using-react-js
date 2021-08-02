const initialState = []
const DeveloperList = (state = initialState, action) => {

    switch (action.type) {
        case 'set_developer_list':
            return action.payload
        case 'clear_developer_list':
            return []
        default:
            return state
    }
}
export default DeveloperList;