import { combineReducers } from 'redux'
import ExploreSearch from './ExploreSearch'
import ExploreCards from './ExploreCards'

export default combineReducers({
    SearchShow: ExploreSearch,
    CardShow: ExploreCards
})