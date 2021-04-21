let initialState = false
const Explore_Buy_Not_Found_Message = (state = initialState, action) => {
    switch (action.type) {
        case 'no_buy_listings_are_found_show_message':
            return true
        case 'buy_listings_are_found_hide_message':
            return false
        default:
            return state
    }
}
export default Explore_Buy_Not_Found_Message;