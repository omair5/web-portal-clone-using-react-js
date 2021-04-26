const initialstate = ''
const PropertyDetails_Price = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_property_details_price':
            return action.payload
        case 'clear_property_details_price':
            return ''
        default:
            return state
    }
}
export default PropertyDetails_Price;
