let initialState = 'Any'

const FrequentlyUsed_Max_Area_Range = (state = initialState, action) => {
    switch (action.type) {
        case 'set_max_value_of_area':
            return action.payload
        case 'clear_max_value_of_area':
            return 'Any'
        default:
            return state
    }
}
export default FrequentlyUsed_Max_Area_Range;