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
    Home_AreaUnit: Home_AreaUnit
})