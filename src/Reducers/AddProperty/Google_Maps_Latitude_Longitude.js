const initialstate = { latitude: '', longitude: '' }
const Google_Maps_Latitude_Longitude = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_Google_Maps_Latitude_Longitude':
            return action.payload
        case 'clear_Google_Maps_Latitude_Longitude':
            return { latitude: '', longitude: '' }
        default:
            return state
    }
}
export default Google_Maps_Latitude_Longitude;