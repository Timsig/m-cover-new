import React from "react";
import AboutYou from './pages/about-you'
import MoreAboutYou from './pages/more-about-you'
import ScrollToTop from './components/scroll-to-top'
import Car1Lookup from './pages/car1-lookup'
import Car1LookupB from './pages/car1-lookup-b'
import Car1Questions from './pages/car1-questions'
import Driver1Questions from './pages/driver1-questions'
import './styles/global-styles.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return(
      <div className="container">
        <Router>
          <ScrollToTop>
            <Route exact path="/" component={AboutYou} />
            <Route path="/more-about-you" component={MoreAboutYou} />
            <Route path="/car1-lookup" component={Car1Lookup} /> 
            <Route path="/car1-questions" component={Car1Questions} />
            <Route path="/driver1-questions" component={Driver1Questions} />           
          </ScrollToTop>
          <Route path="/car1-lookup-b" component={Car1LookupB} />
        </ Router>
      </div>
    )
  }
}

export default Layout;
