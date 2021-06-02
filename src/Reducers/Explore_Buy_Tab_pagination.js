let initialState = {
    purpose: 'Sale',
    city_name: '',
    location_name: '',
    property_type: '',
    min_price: '',
    max_price: '',
    min_area: '',
    max_area: '',
    beds: ''
}
const Explore_Buy_Tab_Pagination = (state = initialState, action) => {
    switch (action.type) {
        case 'set_explore_buy_tab_pagination':
            return action.payload
        case 'clear_explore_buy_tab_pagination':
            return {
                purpose: 'Sale',
                city_name: '',
                location_name: '',
                property_type: '',
                min_price: '',
                max_price: '',
                min_area: '',
                max_area: '',
                beds: ''
            }
        default:
            return state
    }
}
export default Explore_Buy_Tab_Pagination;