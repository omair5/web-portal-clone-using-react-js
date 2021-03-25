let initialState = []

const Home_cities_Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'populate_cities_in_select_list':
            return action.payload
        default:
            return state
    }
}
export default Home_cities_Reducer;