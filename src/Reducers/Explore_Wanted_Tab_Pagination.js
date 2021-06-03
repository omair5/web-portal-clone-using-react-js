let initialState = {
    purpose: 'Wanted',
    city_name: '',
    location_name: '',
    property_type: '',
    min_area: '',
    max_area: '',
    beds: ''
}
const Explore_Wanted_Tab_Pagination = (state = initialState, action) => {
    switch (action.type) {
        case 'set_explore_wanted_tab_pagination':
            return action.payload
        case 'clear_explore_wanted_tab_pagination':
            return {
                purpose: 'Wanted',
                city_name: '',
                location_name: '',
                property_type: '',
                min_area: '',
                max_area: '',
                beds: ''
            }
        default:
            return state
    }
}
export default Explore_Wanted_Tab_Pagination;