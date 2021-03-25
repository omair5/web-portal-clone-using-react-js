let initialState = []

const Home_Locations_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'empty_select_list':
            return []
        case 'populate_location_in_select_list':
            return action.payload
        default:
            return state
    }
}
export default Home_Locations_Reducer;