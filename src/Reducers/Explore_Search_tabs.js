let initialState = 'buy'
const Explore_Search_tabs = (state = initialState, action) => {
    switch (action.type) {
        case '0':
            return 'buy'
        case '1':
            return 'rent'
        case '2':
            return 'wanted'
        case '3':
            return 'project'
        default:
            return state
    }
}
export default Explore_Search_tabs;