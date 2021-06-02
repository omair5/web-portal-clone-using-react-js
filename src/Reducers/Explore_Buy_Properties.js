let initialState = { property_data: [], meta: {} }
const Explore_Buy_Properties = (state = initialState, action) => {
    switch (action.type) {
        case 'explore_buy_properties':
            return action.payload
        case 'clear_explore_buy_properties':
            return { property_data: [], meta: {} }
        default:
            return state
    }
}
export default Explore_Buy_Properties;