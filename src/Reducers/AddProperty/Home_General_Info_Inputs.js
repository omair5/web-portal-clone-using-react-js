const initialstate = { year: '', bedrooms: '', bathrooms: '', parking: '', floors: '' }
const Home_General_Info_Inputs = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_home_general_info_inputs':
            return { ...state, [action.payload.name]: action.payload.value }
        case 'clear_home_general_info_inputs':
            return { year: '', bedrooms: '', bathrooms: '', parking: '', floors: '' }
        default:
            return state
    }
}
export default Home_General_Info_Inputs;