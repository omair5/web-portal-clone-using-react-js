const initialstate = { purpose: '', wantedType: '', propertyType: '' }
const PropertyDetails = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_property_details':
            return { ...state, [action.payload.name]: action.payload.value }
        case 'clear_property_details':
            return { purpose: '', wantedType: '', propertyType: '' }
        default:
            return state
    }
}
export default PropertyDetails;