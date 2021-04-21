const initialstate = ''
const Commercial_Backup = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_commercial_backup':
            return action.payload
        case 'clear_commercial_backup':
            return ''
        default:
            return state
    }
}
export default Commercial_Backup;