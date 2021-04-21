let initialState = true
const Explore_Wanted_Skeleton = (state = initialState, action) => {
    switch (action.type) {
        case 'show_wanted_properties_skeleton':
            return true
        case 'hide_wanted_properties_skeleton':
            return false
        default:
            return state
    }
}
export default Explore_Wanted_Skeleton;