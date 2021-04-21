const initialstate = ''
const AddProperty_Selected_City = (state = initialstate, action) => {
    switch (action.type) {
        case 'add_property_selected_city':
            return action.payload
        case 'add_property_clear_selected_city':
            return ''
        default:
            return state
    }
}
export default AddProperty_Selected_City;