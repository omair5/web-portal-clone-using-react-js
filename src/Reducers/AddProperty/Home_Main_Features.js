const initialstate = {
    Dining_Room: false,
    Drawing_Room: false,
    Store_Room: false,
    Tv_Lounge: false,
    Balcony: false,
    Lawn: false,
    Laundry_Room: false,
    Study_Room: false,
    Powder_Room: false,
    Prayer_Room: false,
    Kitchen: false,
    Dirty_Kitchen: false,
    Central_Cooling: false,
    Central_Heating: false,
    Servant_Quarter: false,
    Furnished: false,
    Swimmimg_Pool: false,
    Security_Staff: false,
    Elavator: false,
    Gym: false,
    Maintenance_Staff: false,
}

const Home_Main_Features = (state = initialstate, action) => {
    switch (action.type) {
        case 'set_home_main_features':
            return { ...state, [action.payload.name]: action.payload.checked }
        case 'clear_home_main_features':
            return {
                Dining_Room: false,
                Drawing_Room: false,
                Store_Room: false,
                Tv_Lounge: false,
                Balcony: false,
                Lawn: false,
                Laundry_Room: false,
                Study_Room: false,
                Powder_Room: false,
                Prayer_Room: false,
                Kitchen: false,
                Dirty_Kitchen: false,
                Central_Cooling: false,
                Central_Heating: false,
                Servant_Quarter: false,
                Furnished: false,
                Swimmimg_Pool: false,
                Security_Staff: false,
                Elavator: false,
                Gym: false,
                Maintenance_Staff: false,
            }

        default:
            return state
    }
}
export default Home_Main_Features;