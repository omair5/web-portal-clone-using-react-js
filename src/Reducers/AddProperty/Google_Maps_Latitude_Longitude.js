const initialstate = { lat: 24.860966, lng: 66.990501 }
const Google_Maps_Latitude_Longitude = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_Google_Maps_Latitude_Longitude':
            return action.payload
        case 'clear_Google_Maps_Latitude_Longitude':
            return { lat: 24.860966, lng: 66.990501 }
        default:
            return state
    }
}
export default Google_Maps_Latitude_Longitude;