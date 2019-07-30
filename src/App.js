import React from "react";
import AboutYou from './pages/about-you'
import MoreAboutYou from './pages/more-about-you'
import ScrollToTop from './components/scroll-to-top'
import Car1Lookup from './pages/car1-lookup'
import Car1LookupB from './pages/car1-lookup-b'
import Car1Questions from './pages/car1-questions'
import Driver1Questions from './pages/driver1-questions'
import Car1AdditionalDrivers from './pages/car1-additional-drivers'
import PolicyCar1Done from './pages/policy-car1done'
import Car2Lookup from './pages/car2-lookup'
import Car2LookupB from './pages/car2-lookup-b'
import Car2Questions from './pages/car2-questions'
import Car2Drivers from './pages/car2-drivers'
import Driver2Questions from './pages/driver2-questions'
import Car2DriversB from './pages/car2-drivers-b'
import Car1DCQuestions from './pages/car1-dc-questions'
import Car2DCA from './pages/car2-dc-a'
import Car2DCA2 from './pages/car2-dc-a2'
import Car2DCB from './pages/car2-dc-b'
import Car2DCC from './pages/car2-dc-c'
import Driver2QuestionsA from './pages/driver2-questions-a'
import Driver2QuestionsB from './pages/driver2-questions-b'
import Car2DCQuestions from './pages/car2-dc-questions'
import PolicySoFar from './pages/policy-so-far'
import Quote from './pages/quote'


import './styles/global-styles.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Main extends React.Component {

  constructor(props) {
    super(props)
    // Bind methods
    this.addDriver1 = this.addDriver1.bind(this);
    this.addDriver2 = this.addDriver2.bind(this);
    
    //Set initial state
    this.state = {
      car2driver1: false,
      car2driver2: false
    }
  }

  addDriver1() {
    console.log("Add driver clicked")
    this.setState ({
      car2driver1: true
    })
  }

  addDriver2() {
    this.setState({
      car2driver2: true
    })
  }
  
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
            <Route path="/car1-additional-drivers" component={Car1AdditionalDrivers} />
            <Route path="/car1-dc-questions" component={Car1DCQuestions} />
            <Route path="/policy-car1done" component={PolicyCar1Done} /> 
            <Route path="/car2-lookup" component={Car2Lookup} />
            <Route path="/car2-questions" component={Car2Questions} />
            <Route path="/car2-drivers" component={Car2Drivers} />
            <Route path="/driver2-questions" component={Driver2Questions} />
            <Route path="/driver2-questions-a" component={Driver2QuestionsA} />
            <Route path="/driver2-questions-b" component={Driver2QuestionsB} />
            <Route path="/car2-drivers-b" component={Car2DriversB} />
            <Route path="/car2-dc-a" component={Car2DCA} />       
            <Route path="/car2-dc-b" component={Car2DCB} />
            <Route path="/car2-dc-a2" component={Car2DCA2} />
            <Route path="/car2-dc-c" component={Car2DCC} />
            <Route path="/car2-dc-questions" component={Car2DCQuestions} />
          </ScrollToTop>
          <Route path="/car1-lookup-b" component={Car1LookupB} />
          <Route path="/car2-lookup-b" component={Car2LookupB} />
          <Route path="/policy-so-far" component={PolicySoFar} />
          <Route path="/quote" component={Quote} />
        </ Router>
      </div>
    )
  }
}

export default Main;
