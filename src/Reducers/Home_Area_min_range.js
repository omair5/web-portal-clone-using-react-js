import { square_feet_range_min, square_yard_range_min, square_meter_range_min, marla_min, kanal_min } from '../components/Home/Tabs/SelectDropDownValues'
let initialState = square_feet_range_min

const Home_Area_min_range = (state = initialState, action) => {
    switch (action.type) {
        case 'sqft_min_range':
            return square_feet_range_min
        case 'sqyd_min_range':
            return square_yard_range_min
        case 'sqm_min_range':
            return square_meter_range_min
        case 'marla_min_range':
            return marla_min
        case 'kanal_min_range':
            return kanal_min
        default:
            return state
    }
}
export default Home_Area_min_range;