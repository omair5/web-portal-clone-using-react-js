const initialstate = {
    North: false,
    North_West: false,
    North_East: false,
    South: false,
    South_West: false,
    South_East: false,
    East: false,
    West: false,
}

const Home_Facing = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_home_facing':
            return { ...state, [action.payload.name]: action.payload.checked }
        case 'clear_home_facing':
            return {
                North: false,
                North_West: false,
                North_East: false,
                South: false,
                South_West: false,
                South_East: false,
                East: false,
                West: false,
            }

        default:
            return state
    }
}
export default Home_Facing;