import { square_feet_range_max, square_yard_range_max, square_meter_range_max, marla_max, kanal_max } from '../components/Home/Tabs/SelectDropDownValues'
let initialState = square_feet_range_max

const Home_Area_max_range = (state = initialState, action) => {
    switch (action.type) {
        case 'sqft_max_range':
            return square_feet_range_max
        case 'sqyd_max_range':
            return square_yard_range_max
        case 'sqm_max_range':
            return square_meter_range_max
        case 'marla_max_range':
            return marla_max
        case 'kanal_max_range':
            return kanal_max
        default:
            return state
    }
}
export default Home_Area_max_range;