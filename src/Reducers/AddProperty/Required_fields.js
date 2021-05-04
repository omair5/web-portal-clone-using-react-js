const initialstate = {
    purpose_required: false,
    wantedType_required: false,
    propertyType_required: false,
    property_category_required: false,
    city_name_required: false,
    location_name_required: false,
    property_title_required: false,
    property_description_required: false,
    price_required: false,
    land_area_required: false,
    area_unit_name_required: false,
    min_3_images_required: false
}

const RequiredFields = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_required_field_error':
            return { ...state, [action.payload.name]: action.payload.value }
        case 'clear_required_field_error':
            return {
                purpose_required: false,
                wantedType_required: false,
                propertyType_required: false,
                property_category_required: false,
                city_name_required: false,
                location_name_required: false,
                property_title_required: false,
                property_description_required: false,
                price_required: false,
                land_area_required: false,
                area_unit_name_required: false,
                min_3_images_required: false
            }
        default:
            return state
    }
}
export default RequiredFields;