import React, { Suspense, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Loader from './Loader/Loader';
import ProtectedRoutes from './PotectedRoutes';
import HomeGetCities from './Services/HomeGetCities';
import ExploreGetProperties from './Services/ExploreGetProperties';
import AgentDeveloperGetShortDetail from './Services/AgentDeveloperGetShortDetail'

const Home = React.lazy(() => import('./pages/Home'));
const Explore = React.lazy(() => import('./pages/Explore'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Agents = React.lazy(() => import('./pages/Agents'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
// const AreaGuide = React.lazy(() => import('./pages/AreaGuide'));
const Partners = React.lazy(() => import('./pages/Partners'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const AddProperty = React.lazy(() => import('./pages/AddProperty'));
const UserLogin = React.lazy(() => import('./pages/UserLogIn'));
const Property = React.lazy(() => import('./pages/Property'));
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'));
const ResetPasswordDialogBox = React.lazy(() => import('./components/FrequentlyUsed/ResetPasswordDialogBox'));
const Project = React.lazy(() => import('./pages/Project'));
const AgentDetail = React.lazy(() => import('./pages/AgentDetails'));
const DeveloperDetail = React.lazy(() => import('./pages/DeveloperDetail'));
const BlogDetail = React.lazy(() => import('./pages/BlogDetail'));
const HomeLinksSearchResult = React.lazy(() => import('./pages/HomeLinksSearchResult'))
const HomeLinksSearchResultColumn2 = React.lazy(() => import('./pages/HomeLinksSearchResultColumn2'))
const ChangePassword = React.lazy(() => import('./pages/ChangePassword'))
const AccountSetting = React.lazy(() => import('./pages/AccountSetting'))
const MyListings = React.lazy(() => import('./pages/MyListings'))

// const Listings = React.lazy(() => import('./pages/Listings'));
// const Packages = React.lazy(() => import('./pages/packages'));


function App() {
  const dispatch = useDispatch()
  // --------------------FETCHING API'S HERE TO PASS DATA TO CHILD COMPONENTS

  // FETCHING CITY API
  useEffect(() => {
    let mounted = true
    async function GetCitiesHome() {
      const cities_options = []
      const cities = await HomeGetCities()
      cities.map(value => (
        cities_options.push({ label: value, value: value })
      ))
      if (mounted) {
        dispatch({ type: 'populate_cities_in_select_list', payload: cities_options })
      }
    }
    GetCitiesHome()
    // cancel subscription to useEffect
    return () => mounted = false;
  }, [dispatch])


  // EXPLORE-----FETCHING BUY PROPERTIES LIST
  useEffect(() => {
    let mounted = true
    async function GetPropertiesExplore() {
      if (mounted) {
        const buy_response = await ExploreGetProperties('Sale')
        if (buy_response.length !== 0) {
          dispatch({ type: 'hide_buy_properties_skeleton' })
          dispatch({ type: 'explore_buy_properties', payload: buy_response })

        }
        else {
          dispatch({ type: 'hide_buy_properties_skeleton' })
          dispatch({ type: 'explore_buy_properties', payload: buy_response })
          dispatch({ type: 'no_buy_listings_are_found_show_message' })
        }
      }
    }
    GetPropertiesExplore().catch(err => console.log(err))
    // cancel subscription to useEffect
    return () => mounted = false;
  }, [dispatch])


  // EXPLORE-----FETCHING RENT PROPERTIES LIST
  useEffect(() => {
    let mounted = true
    async function GetPropertiesExplore() {
      if (mounted) {
        const rent_response = await ExploreGetProperties('Rent')
        if (rent_response.length !== 0) {
          dispatch({ type: 'hide_rent_properties_skeleton' })
          dispatch({ type: 'explore_rent_properties', payload: rent_response })

        }
        else {
          dispatch({ type: 'hide_rent_properties_skeleton' })
          dispatch({ type: 'explore_rent_properties', payload: rent_response })
          dispatch({ type: 'no_rent_listings_are_found_show_message' })
        }
      }
    }
    GetPropertiesExplore().catch(err => console.log(err))
    // cancel subscription to useEffect
    return () => mounted = false;
  }, [dispatch])


  // EXPLORE-----FETCHING WANTED PROPERTIES LIST
  useEffect(() => {
    let mounted = true
    async function GetPropertiesExplore() {
      if (mounted) {
        const wanted_response = await ExploreGetProperties('Wanted')
        if (wanted_response.length !== 0) {
          dispatch({ type: 'hide_wanted_properties_skeleton' })
          dispatch({ type: 'explore_wanted_properties', payload: wanted_response })

        }
        else {
          dispatch({ type: 'hide_wanted_properties_skeleton' })
          dispatch({ type: 'explore_wanted_properties', payload: wanted_response })
          dispatch({ type: 'no_wanted_listings_are_found_show_message' })
        }
      }
    }
    GetPropertiesExplore().catch(err => console.log(err))
    // cancel subscription to useEffect
    return () => mounted = false;
  }, [dispatch])

  // EXPLORE-----FETCHING PROJECT LIST
  useEffect(() => {
    let mounted = true
    const GetShortDetailAgentDeveloperProject = async () => {
      if (mounted) {
        const projectResponse = await AgentDeveloperGetShortDetail('project', 'shortproject')
        if (projectResponse.length !== 0) {
          dispatch({ type: 'set_project_list', payload: projectResponse })
          dispatch({ type: 'hide_project_list_skeleton' })
          dispatch({ type: 'project_listings_are_found_hide_message' })
        }
        else {
          dispatch({ type: 'hide_project_list_skeleton' })
          dispatch({ type: 'set_project_list', payload: projectResponse })
          dispatch({ type: 'no_project_listings_are_found_show_message' })
        }
      }
    }
    GetShortDetailAgentDeveloperProject().catch(err => console.log(err))
    // cancel subscription to useEffect
    return () => mounted = false;
  }, [dispatch])



  return (
    <>
      {/* THESE ARE PAGES */}
      <Router>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/popular-cities-to-buy-properties/:description' component={HomeLinksSearchResult} />
            <Route exact path='/popular-cities-for-rent/:description' component={HomeLinksSearchResult} />
            <Route exact path='/popular-locations-for-home/:description' component={HomeLinksSearchResultColumn2} />
            <Route exact path='/explore' component={Explore} />
            <Route exact path='/developers' component={Developers} />
            <Route exact path='/agents' component={Agents} />
            <Route exact path='/blogs' component={Blogs} />
            {/* <Route exact path='/areaguide' component={AreaGuide} /> */}
            <Route exact path='/partners' component={Partners} />
            <Route exact path='/contact' component={ContactUs} />
            <Route exact path='/about' component={AboutUs} />
            <Route exact path='/property/:propertyTitle/:propertyId' component={Property} />

            {/* protected routes */}
            <Route exact path='/add-property'>
              <ProtectedRoutes Component={AddProperty} />
            </Route>

            {/* RESET PASSWORD */}
            <Route exact path='/reset/password' component={ResetPasswordDialogBox} />

            {/* PROJECT DETAIL PAGE */}
            <Route exact path='/project/:description/:id' component={Project} />
            {/* AGENT DETAIL PAGE */}
            <Route exact path='/agent/:agent_name/:id' component={AgentDetail} />
            {/* DEVELOPER DETAIL PAGE */}
            <Route exact path='/developer/:developer_name/:id' component={DeveloperDetail} />
            {/* BLOG DETAIL PAGE */}
            <Route exact path='/blog/:category/:blog_title/:id' component={BlogDetail} />

            {/* dashboard pages */}
            <Route exact path='/my-listings'>
              <ProtectedRoutes Component={MyListings} />
            </Route>
            <Route exact path='/dashboard'>
              <ProtectedRoutes Component={UserLogin} />
            </Route>
            <Route exact path='/account-setting'>
              <ProtectedRoutes Component={AccountSetting} />
            </Route>
            <Route exact path='/change-password'>
              <ProtectedRoutes Component={ChangePassword} />
            </Route>

            {/* FALLBACK PAGE */}
            <Route path='*' exact={true} component={PageNotFound} />


            {/* after clicking on any type of add property u will be directed to this page */}
            {/* <Route exact path='/packages' component={Packages} /> */}
            {/* listing of property , this page will be made from API */}
            {/* <Route exact path='/listings' component={Listings} /> */}

          </Switch>
        </Suspense>
      </Router>
    </>
  )
}
export default App;