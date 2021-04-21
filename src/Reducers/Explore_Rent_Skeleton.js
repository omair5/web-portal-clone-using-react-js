let initialState = true
const Explore_Rent_Skeleton = (state = initialState, action) => {
    switch (action.type) {
        case 'show_rent_properties_skeleton':
            return true
        case 'hide_rent_properties_skeleton':
            return false
        default:
            return state
    }
}
export default Explore_Rent_Skeleton;