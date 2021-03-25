let initialState = 0
const Explore_Listings_Tabs = (state = initialState, action) => {
    switch (action.type) {
        case 'set_current_tab_to_buy':
            return 0
        case 'set_current_tab_to_rent':
            return 1
        case 'set_current_tab_to_wanted':
            return 2
        case 'set_current_tab_to_project':
            return 3
        default:
            return state
    }
}
export default Explore_Listings_Tabs;