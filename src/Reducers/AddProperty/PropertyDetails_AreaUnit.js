const initialstate = 'Square Feet'
const PropertyDetails_AreaUnit = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_property_details_area_unit':
            return action.payload
        case 'clear_property_details_area_unit':
            return 'Square Feet'
        default:
            return state
    }
}
export default PropertyDetails_AreaUnit;