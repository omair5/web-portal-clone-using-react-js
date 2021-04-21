const initialstate = {
    Internet: false,
    Cable_TV: false,
    Intercom: false,
    Wifi: false,
    CCTV_Camera: false,
    ATM_Machine: false,
}

const Commercial_business_And_Communication = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_commercial_business_and_communication':
            return { ...state, [action.payload.name]: action.payload.checked }
        case 'clear_commercial_business_and_communication':
            return {
                Internet: false,
                Cable_TV: false,
                Intercom: false,
                Wifi: false,
                CCTV_Camera: false,
                ATM_Machine: false,
            }
        default:
            return state
    }
}
export default Commercial_business_And_Communication;