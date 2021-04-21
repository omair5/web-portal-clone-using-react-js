let initialState = true
const Explore_Buy_Skeleton = (state = initialState, action) => {
    switch (action.type) {
        case 'show_buy_properties_skeleton':
            return true
        case 'hide_buy_properties_skeleton':
            return false
        default:
            return state
    }
}
export default Explore_Buy_Skeleton;