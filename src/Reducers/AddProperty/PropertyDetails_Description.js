const initialstate = ''
const PropertyDetails_Description = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_property_details_description':
            return action.payload
        case 'clear_property_details_description':
            return ''
        default:
            return state
    }
}
export default PropertyDetails_Description;