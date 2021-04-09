import { combineReducers } from 'redux'
import ExploreSearch from './ExploreSearch'
import ExploreCards from './ExploreCards'
import DeveloperSearch from './DeveloperSearch'
import DeveloperCards from './DeveloperCards'
import AgentCards from './AgentCards'
import AgentSearch from './AgentSearch'
import SignInDialog from './SignInDialog'
import RegisterDialog from './RegisterDialog'
import ListingGalleryCarousel from './ListingGalleryCarousel'
import AreaUnitPopUp from './AreaUnitPopUp'
import Home_AreaUnit from './Home_AreaUnit'
import Home_Area_min_range from './Home_Area_min_range'
import Home_Area_max_range from './Home_Area_max_range'
import Explore_Change_tab from './Explore_Search_tabs'
import Home_cities_Reducer from './Home_Cities_Reducer'
import Explore_Listings_Tabs from './Explore_Listings_Tabs'
import FrequentlyUsed_Min_Price_Range from './FrequentlyUsed_Min_Price_Range'
import FrequentlyUsed_Max_Price_Range from './FrequentlyUsed_Max_Price_Range'
import FrequentlyUsed_Min_Area_Range from './FrequentlyUsed_Min_Area_Range'
import FrequentlyUsed_Max_Area_Range from './FrequentlyUsed_Max_Area_Range'
import FrequentlyUsed_Confirmation_Dialog from './FrequentlyUsed_Confirmation_Dialog'
import AuthorizedUserReducer from './AuthorizedUserReducer'
import FrequentlyUsed_Forget_Password from './FrequentlyUsed_Forget_Password'
import FrequentlyUsed_Reset_Password from './FrequentlyUsed_Reset_Password'
import AuthorizedUserNameReducer from './AuthorizedUserNameReducer'

export default combineReducers({
    SearchShow: ExploreSearch,
    CardShow: ExploreCards,
    DeveloperSearchShow: DeveloperSearch,
    DeveloperCardShow: DeveloperCards,
    AgentSearchShow: AgentSearch,
    AgentCardShow: AgentCards,
    SignInDialogStatus: SignInDialog,
    RegisterDialogStatus: RegisterDialog,
    ListingCarousel: ListingGalleryCarousel,
    AreaUnitPopUp: AreaUnitPopUp,
    Home_AreaUnit: Home_AreaUnit,
    Home_Area_min_range: Home_Area_min_range,
    Home_Area_max_range: Home_Area_max_range,
    Explore_Change_tab: Explore_Change_tab,
    Home_cities_Reducer: Home_cities_Reducer,
    Explore_Listings_Tabs: Explore_Listings_Tabs,
    FrequentlyUsed_Min_Price_Range: FrequentlyUsed_Min_Price_Range,
    FrequentlyUsed_Max_Price_Range: FrequentlyUsed_Max_Price_Range,
    FrequentlyUsed_Min_Area_Range: FrequentlyUsed_Min_Area_Range,
    FrequentlyUsed_Max_Area_Range: FrequentlyUsed_Max_Area_Range,
    FrequentlyUsed_Confirmation_Dialog: FrequentlyUsed_Confirmation_Dialog,
    AuthorizedUserReducer: AuthorizedUserReducer,
    FrequentlyUsed_Forget_Password: FrequentlyUsed_Forget_Password,
    FrequentlyUsed_Reset_Password: FrequentlyUsed_Reset_Password,
    AuthorizedUserNameReducer: AuthorizedUserNameReducer
})