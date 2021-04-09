let initialState = '0'

const FrequentlyUsed_Min_Price_Range = (state = initialState, action) => {
    switch (action.type) {
        case 'set_min_value_of_price':
            return action.payload
        case 'clear_min_value_of_price':
            return state
        default:
            return state
    }
}
export default FrequentlyUsed_Min_Price_Range;