let initialState = true
const Explore_Project_list_Skeleton = (state = initialState, action) => {
    switch (action.type) {
        case 'show_project_list_skeleton':
            return true
        case 'hide_project_list_skeleton':
            return false
        default:
            return state
    }
}
export default Explore_Project_list_Skeleton;