let initialState = 'Any'

const FrequentlyUsed_Max_Price_Range = (state = initialState, action) => {
    switch (action.type) {
        case 'set_max_value_of_price':
            return action.payload
        case 'clear_max_value_of_price':
            return state
        default:
            return state
    }
}
export default FrequentlyUsed_Max_Price_Range;