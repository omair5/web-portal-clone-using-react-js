import { combineReducers } from 'redux'
import ExploreSearch from './ExploreSearch'
import ExploreCards from './ExploreCards'

export default combineReducers({
    ExploreSearch: ExploreSearch,
    ExploreCards: ExploreCards
})