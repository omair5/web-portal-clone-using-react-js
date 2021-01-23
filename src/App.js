import React, { Suspense } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from './store';
import { Provider } from 'react-redux'
import Loader from './Loader/Loader'
// import Explore from './pages/Explore'
// import Developers from './pages/Developers'
// import Agents from './pages/Agents'
// import Blogs from './pages/Blogs'
// import AreaGuide from './pages/AreaGuide'
// import Partners from './pages/Partners'
// import ContactUs from './pages/ContactUs'
// import AboutUs from './pages/AboutUs'
const Home = React.lazy(() => import('./pages/Home'));
const Explore = React.lazy(() => import('./pages/Explore'));
const Developers = React.lazy(() => import('./pages/Developers'));
const Agents = React.lazy(() => import('./pages/Agents'));
const Blogs = React.lazy(() => import('./pages/Blogs'));
const AreaGuide = React.lazy(() => import('./pages/AreaGuide'));
const Partners = React.lazy(() => import('./pages/Partners'));
const ContactUs = React.lazy(() => import('./pages/ContactUs'));
const AboutUs = React.lazy(() => import('./pages/AboutUs'));
const UserLogin = React.lazy(() => import('./pages/UserLogIn'));


function App() {
  return (
    <>
      <Provider store={store}>
        {/* THESE ARE PAGES */}
        <Router>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/explore' component={Explore} />
              <Route exact path='/developers' component={Developers} />
              <Route exact path='/agents' component={Agents} />
              <Route exact path='/blogs' component={Blogs} />
              <Route exact path='/areaguide' component={AreaGuide} />
              <Route exact path='/partners' component={Partners} />
              <Route exact path='/contact' component={ContactUs} />
              <Route exact path='/about' component={AboutUs} />
              <Route exact path='/my-account' component={UserLogin} />
            </Switch>
          </Suspense>
        </Router>
      </Provider>
    </>
  )
}
export default App;
