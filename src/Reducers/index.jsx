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
import Explore_Buy_Properties from './Explore_Buy_Properties'
import Explore_Buy_Skeleton from './Explore_Buy_Skeleton'
import Explore_Buy_Not_Found_Message from './Explore_Buy_Not_Found_Message'
import Explore_Rent_Properties from './Explore_Rent_Properties'
import Explore_Rent_Skeleton from './Explore_Rent_Skeleton'
import Explore_Rent_Not_Found_Message from './Explore_Rent_Not_Found_Message'
import Explore_Wanted_Properties from './Explore_Wanted_Properties'
import Explore_Wanted_Skeleton from './Explore_Wanted_Skeleton'
import Explore_Wanted_Not_Found_Message from './Explore_Wanted_Not_Found_Message'
import SubPropertyType from './AddProperty/SubPropertyType'
import PropertyDetails from './AddProperty/PropertyDetails'
import AddProperty_Selected_City from './AddProperty/AddProperty_Selected_City'
import AddProperty_Selected_Country from './AddProperty/AddProperty_Selected_Country'
import Home_General_Info_Inputs from './AddProperty/Home_General_Info_Inputs'
import Home_Flooring from './AddProperty/Home_Flooring'
import Home_Backup from './AddProperty/Home_Backup'
import Home_Main_Features from './AddProperty/Home_Main_Features'
import Home_business_And_Communication from './AddProperty/Home_Business_And_Communication'
import Home_utilities from './AddProperty/Home_Utilities'
import Home_Facing from './AddProperty/Home_Facing'
import Plot_Main_Features from './AddProperty/Plot_Main_Features'
import Commercial_General_Info_Inputs from './AddProperty/Commercial_General_Info_Inputs'
import Commercial_Flooring from './AddProperty/Commercial_Flooring'
import Commercial_Backup from './AddProperty/Commercial_Backup'
import Commercial_business_And_Communication from './AddProperty/Commercial_Bussiness_And_Communication'
import Commercial_Main_Features from './AddProperty/Commercial_Main_Features'

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
    AuthorizedUserNameReducer: AuthorizedUserNameReducer,
    Explore_Buy_Properties: Explore_Buy_Properties,
    Explore_Buy_Skeleton: Explore_Buy_Skeleton,
    Explore_Buy_Not_Found_Message: Explore_Buy_Not_Found_Message,
    Explore_Rent_Properties: Explore_Rent_Properties,
    Explore_Rent_Skeleton: Explore_Rent_Skeleton,
    Explore_Rent_Not_Found_Message: Explore_Rent_Not_Found_Message,
    Explore_Wanted_Properties: Explore_Wanted_Properties,
    Explore_Wanted_Skeleton: Explore_Wanted_Skeleton,
    Explore_Wanted_Not_Found_Message: Explore_Wanted_Not_Found_Message,
    SubPropertyType: SubPropertyType,
    PropertyDetails: PropertyDetails,
    AddProperty_Selected_City: AddProperty_Selected_City,
    AddProperty_Selected_Country: AddProperty_Selected_Country,
    Home_General_Info_Inputs: Home_General_Info_Inputs,
    Home_Flooring: Home_Flooring,
    Home_Backup: Home_Backup,
    Home_Main_Features: Home_Main_Features,
    Home_business_And_Communication: Home_business_And_Communication,
    Home_utilities: Home_utilities,
    Home_Facing: Home_Facing,
    Plot_Main_Features: Plot_Main_Features,
    Commercial_General_Info_Inputs: Commercial_General_Info_Inputs,
    Commercial_Flooring: Commercial_Flooring,
    Commercial_Backup: Commercial_Backup,
    Commercial_business_And_Communication: Commercial_business_And_Communication,
    Commercial_Main_Features: Commercial_Main_Features
})