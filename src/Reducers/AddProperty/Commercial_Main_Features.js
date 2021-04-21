const initialstate = {
    Public_Parking: false,
    Underground_Parking: false,
    Elevator: false,
    Lobby: false,
    Furnished: false,
    Central_Heating: false,
    Central_Cooling: false,
    Mosque: false,
    Security_Staff: false,
    Maintenance_Staff: false,
}

const Commercial_Main_Features = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_commercial_main_features':
            return { ...state, [action.payload.name]: action.payload.checked }
        case 'clear_commercial_main_features':
            return {
                Public_Parking: false,
                Underground_Parking: false,
                Elevator: false,
                Lobby: false,
                Furnished: false,
                Central_Heating: false,
                Central_Cooling: false,
                Mosque: false,
                Security_Staff: false,
                Maintenance_Staff: false,
            }
        default:
            return state
    }
}
export default Commercial_Main_Features;