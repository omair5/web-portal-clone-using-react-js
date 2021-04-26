const initialstate = ''
const AddProperty_Selected_Location = (state = initialstate, action) => {
    switch (action.type) {
        case 'add_property_selected_location':
            return action.payload
        case 'add_property_clear_selected_location':
            return ''
        default:
            return state
    }
}
export default AddProperty_Selected_Location;