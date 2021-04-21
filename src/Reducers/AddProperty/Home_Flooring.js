const initialstate = ''
const Home_Flooring = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_home_flooring':
            return action.payload
        case 'clear_home_flooring':
            return ''
        default:
            return state
    }
}
export default Home_Flooring;