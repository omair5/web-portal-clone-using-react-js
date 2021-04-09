let initialState = '0'

const FrequentlyUsed_Min_Area_Range = (state = initialState, action) => {
    switch (action.type) {
        case 'set_min_value_of_area':
            return action.payload
        case 'clear_min_value_of_area':
            return '0'
        default:
            return state
    }
}
export default FrequentlyUsed_Min_Area_Range;