import React, { Suspense, useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Loader from './Loader/Loader';
import ProtectedRoutes from './PotectedRoutes';
import HomeGetCities from './Services/HomeGetCities';

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



  // CLEARING SESSION AFTER 30 MINUTES (AUTOMATIC LOGOUT AFTER 30 MINUTES)
  setTimeout(() => {
    localStorage.clear()
    window.location.href = "/";
    dispatch({ type: 'remove_authorized_user_name' })
    dispatch({ type: 'clear_authorized_user' })
  }, 1800000)

  // CLEARING LOCAL STORAGE DATA
  window.onbeforeunload = () => {
    if (localStorage.getItem('secretkey')) {
      const getting_secret_key = localStorage.getItem('secretkey')
      const getting_user_name = localStorage.getItem('username')
      const getting_user_email = localStorage.getItem('user_email')
      // Clear the local storage but keep the secret key
      localStorage.clear()
      localStorage.setItem('secretkey', getting_secret_key)
      localStorage.setItem('username', getting_user_name)
      localStorage.setItem('user_email', getting_user_email)

    }
    else {
      // Clear the local storage but keep the secret key
      localStorage.clear()
    }
  }


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