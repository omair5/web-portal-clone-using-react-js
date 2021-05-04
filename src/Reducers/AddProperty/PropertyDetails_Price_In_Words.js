const initialstate = 'Price must contain numbers only'
const PropertyDetails_Price_In_Words = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_property_details_Price_In_Words':
            return action.payload
        case 'clear_property_details_Price_In_Words':
            return 'Price must contain numbers only'
        default:
            return state
    }
}
export default PropertyDetails_Price_In_Words;
