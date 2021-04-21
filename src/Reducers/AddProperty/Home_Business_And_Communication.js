const initialstate = {
    Internet: false,
    Cable_TV: false,
    Intercom: false,
    Wifi: false,
    CCTV_Camera: false,
}

const Home_business_And_Communication = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_home_business_and_communication':
            return { ...state, [action.payload.name]: action.payload.checked }
        case 'clear_home_business_and_communication':
            return {
                Internet: false,
                Cable_TV: false,
                Intercom: false,
                Wifi: false,
                CCTV_Camera: false,
            }

        default:
            return state
    }
}
export default Home_business_And_Communication;