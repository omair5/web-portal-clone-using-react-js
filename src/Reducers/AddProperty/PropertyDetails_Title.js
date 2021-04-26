const initialstate = ''
const PropertyDetails_Title = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_property_details_title':
            return action.payload
        case 'clear_property_details_title':
            return ''
        default:
            return state
    }
}
export default PropertyDetails_Title;