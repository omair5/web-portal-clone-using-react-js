const initialState = []
const ProjectList = (state = initialState, action) => {
    switch (action.type) {
        case 'set_project_list':
            return action.payload
        case 'clear_project_list':
            return []
        default:
            return state
    }
}
export default ProjectList