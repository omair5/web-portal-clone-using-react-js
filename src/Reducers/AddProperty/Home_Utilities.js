const initialstate = {
    Electricity: false,
    Gas: false,
    Water: false,
    Maintenance: false,
    Sewerage: false,
}

const Home_utilities = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_Home_utilities':
            return { ...state, [action.payload.name]: action.payload.checked }
        case 'clear_Home_utilities':
            return {
                Electricity: false,
                Gas: false,
                Water: false,
                Maintenance: false,
                Sewerage: false,
            }

        default:
            return state
    }
}
export default Home_utilities;