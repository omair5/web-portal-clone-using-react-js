const initialstate = ''
const Commercial_Flooring = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_commercial_flooring':
            return action.payload
        case 'clear_commercial_flooring':
            return ''
        default:
            return state
    }
}
export default Commercial_Flooring;