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
import AddProperty_Selected_Location from './AddProperty/AddProperty_Selected_Location'
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
import AddImages_Images_List from './AddProperty/AddImages_Images_List'
import PropertyDetails_Title from './AddProperty/PropertyDetails_Title'
import PropertyDetails_Description from './AddProperty/PropertyDetails_Description'
import PropertyDetails_Price from './AddProperty/PropertyDetails_Price'
import PropertyDetails_LandArea from './AddProperty/PropertyDetails_LandArea'
import PropertyDetails_AreaUnit from './AddProperty/PropertyDetails_AreaUnit'
import RequiredFields from './AddProperty/Required_fields'
import PropertyDetails_Price_In_Words from './AddProperty/PropertyDetails_Price_In_Words'
import PropertyDetails_EditorState from './AddProperty/PropertyDetails_EditorState'
import Google_Maps_Latitude_Longitude from './AddProperty/Google_Maps_Latitude_Longitude'
import FrequentlyUsed_PopUpMessage from './FrequentlyUsed_PopUpMessage'
import FrequentlyUsed_Failure_PopUpMessage from './FrequentlyUsed_Failure_PopUpMessage'
import Explore_Buy_Tab_Pagination from './Explore_Buy_Tab_pagination'
import Explore_Rent_Tab_Pagination from './Explore_Rent_Tab_Pagination'
import Explore_Wanted_Tab_Pagination from './Explore_Wanted_Tab_Pagination'
import AgentList from './AgentList'
import DeveloperList from './DeveloperList'
import ProjectList from './ProjectList'
import Explore_Project_list_Skeleton from './Explore_Project_list_Skeleton'
import Explore_Project_Not_Found_Message from './Explore_Project_Not_Found_Message'
import Explore_RunThisEffectOnMount_ForBuy from './Explore_RunThisEffectOnMount_ForBuy'
import Explore_RunThisEffectOnMount_ForProject from './Explore_RunThisEffectOnMount_ForProject'
import Explore_RunThisEffectOnMount_ForRent from './Explore_RunThisEffectOnMount_ForRent'
import Explore_RunThisEffectOnMount_ForWanted from './Explore_RunThisEffectOnMount_ForWanted'

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
    AddProperty_Selected_Location: AddProperty_Selected_Location,
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
    Commercial_Main_Features: Commercial_Main_Features,
    AddImages_Images_List: AddImages_Images_List,
    PropertyDetails_Title: PropertyDetails_Title,
    PropertyDetails_Description: PropertyDetails_Description,
    PropertyDetails_Price: PropertyDetails_Price,
    PropertyDetails_LandArea: PropertyDetails_LandArea,
    PropertyDetails_AreaUnit: PropertyDetails_AreaUnit,
    RequiredFields: RequiredFields,
    PropertyDetails_Price_In_Words: PropertyDetails_Price_In_Words,
    PropertyDetails_EditorState: PropertyDetails_EditorState,
    Google_Maps_Latitude_Longitude: Google_Maps_Latitude_Longitude,
    FrequentlyUsed_PopUpMessage: FrequentlyUsed_PopUpMessage,
    FrequentlyUsed_Failure_PopUpMessage: FrequentlyUsed_Failure_PopUpMessage,
    Explore_Buy_Tab_Pagination: Explore_Buy_Tab_Pagination,
    Explore_Rent_Tab_Pagination: Explore_Rent_Tab_Pagination,
    Explore_Wanted_Tab_Pagination: Explore_Wanted_Tab_Pagination,
    AgentList: AgentList,
    DeveloperList: DeveloperList,
    ProjectList: ProjectList,
    Explore_Project_list_Skeleton: Explore_Project_list_Skeleton,
    Explore_Project_Not_Found_Message: Explore_Project_Not_Found_Message,
    Explore_RunThisEffectOnMount_ForBuy: Explore_RunThisEffectOnMount_ForBuy,
    Explore_RunThisEffectOnMount_ForProject: Explore_RunThisEffectOnMount_ForProject,
    Explore_RunThisEffectOnMount_ForRent: Explore_RunThisEffectOnMount_ForRent,
    Explore_RunThisEffectOnMount_ForWanted: Explore_RunThisEffectOnMount_ForWanted
})