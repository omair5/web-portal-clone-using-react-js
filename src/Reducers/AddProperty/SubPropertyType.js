const initialstate = ''
const SubPropertyType = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_sub_type_home':
            return action.payload
        case 'set_sub_type_plot':
            return action.payload
        case 'set_sub_type_commercial':
            return action.payload
        case 'clear_property_sub_type':
            return ''
        default:
            return state
    }
}
export default SubPropertyType;