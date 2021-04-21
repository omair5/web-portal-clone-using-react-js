const initialstate = ''
const AddProperty_Selected_Country = (state = initialstate, action) => {
    switch (action.type) {
        case 'add_property_selected_country':
            return action.payload
        case 'add_property_clear_selected_country':
            return ''
        default:
            return state
    }
}
export default AddProperty_Selected_Country;