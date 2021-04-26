const initialstate = ''
const PropertyDetails_LandArea = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_property_details_land_area':
            return action.payload
        case 'clear_property_details_land_area':
            return ''
        default:
            return state
    }
}
export default PropertyDetails_LandArea;