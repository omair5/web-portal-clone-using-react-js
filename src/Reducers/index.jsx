import { combineReducers } from 'redux'
import ExploreSearch from './ExploreSearch'
import ExploreCards from './ExploreCards'
import DeveloperSearch from './DeveloperSearch'
import DeveloperCards from './DeveloperCards'
import AgentCards from './AgentCards'
import AgentSearch from './AgentSearch'




export default combineReducers({
    SearchShow: ExploreSearch,
    CardShow: ExploreCards,
    DeveloperSearchShow: DeveloperSearch,
    DeveloperCardShow: DeveloperCards,
    AgentSearchShow: AgentSearch,
    AgentCardShow: AgentCards

})