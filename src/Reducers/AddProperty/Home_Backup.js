const initialstate = ''
const Home_Backup = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_home_backup':
            return action.payload
        case 'clear_home_backup':
            return ''
        default:
            return state
    }
}
export default Home_Backup;