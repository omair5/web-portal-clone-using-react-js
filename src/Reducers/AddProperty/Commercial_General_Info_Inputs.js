const initialstate = { year: '', bedrooms: '', parking: '', floors: '' }
const Commercial_General_Info_Inputs = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_commercial_general_info_inputs':
            return { ...state, [action.payload.name]: action.payload.value }
        case 'clear_commercial_general_info_inputs':
            return { year: '', bedrooms: '', parking: '', floors: '' }
        default:
            return state
    }
}
export default Commercial_General_Info_Inputs;