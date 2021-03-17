let initialstate = 'SQ FT';
const Home_AreaUnit = (state = initialstate, action) => {
    switch (action.type) {
        case 'change_to_SQFT':
            return 'SQ FT'
        case 'change_to_SQYD':
            return 'SQ YD'
        case 'change_to_SQM':
            return 'SQ M'
        case 'change_to_MARLA':
            return 'MARLA'
        case 'change_to_KANAL':
            return 'KANAL'
        default:
            return state
    }
}
export default Home_AreaUnit;