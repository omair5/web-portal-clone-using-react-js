import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'
import Home from './pages/Home';
import Explore from './pages/Explore';
import Developers from './pages/Developers';
import Agents from './pages/Agents';
import Blogs from './pages/Blogs';
import AreaGuide from './pages/AreaGuide';
import Partners from './pages/Partners';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Store from './store'
// import { Provider } from 'react-redux'

function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      {/* THESE ARE PAGES */}
      <Router>
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
        </Switch>
      </Router>
      {/* </Provider> */}
    </>
  )
}

export default App;
