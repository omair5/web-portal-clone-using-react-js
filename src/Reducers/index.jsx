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
import Home_Locations_Reducer from './Home_Locations_Reducer'
import Explore_Listings_Tabs from './Explore_Listings_Tabs'

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
    Home_Locations_Reducer: Home_Locations_Reducer,
    Explore_Listings_Tabs: Explore_Listings_Tabs
})