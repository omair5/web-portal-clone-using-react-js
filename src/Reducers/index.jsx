import { combineReducers } from 'redux'
import ExploreSearch from './ExploreSearch'
import ExploreCards from './ExploreCards'
import DeveloperSearch from './DeveloperSearch'
import DeveloperCards from './DeveloperCards'


export default combineReducers({
    SearchShow: ExploreSearch,
    CardShow: ExploreCards,
    DeveloperSearchShow: DeveloperSearch,
    DeveloperCardShow: DeveloperCards
})