let initialState = { property_data: [], meta: {} }
const Explore_Rent_Properties = (state = initialState, action) => {
    switch (action.type) {
        case 'explore_rent_properties':
            return action.payload
        case 'clear_explore_Rent_properties':
            return { property_data: [], meta: {} }
        default:
            return state
    }
}
export default Explore_Rent_Properties;