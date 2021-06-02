let initialState = { property_data: [], meta: {} }
const Explore_Wanted_Properties = (state = initialState, action) => {
    switch (action.type) {
        case 'explore_wanted_properties':
            return action.payload
        case 'clear_explore_wanted_properties':
            return { property_data: [], meta: {} }
        default:
            return state
    }
}
export default Explore_Wanted_Properties;