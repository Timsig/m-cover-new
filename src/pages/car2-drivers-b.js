import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/header"
import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qyesno from "../components/q_yesno"
import Qbuttons from "../components/q_buttons"
import Qrevealer from "../components/q_revealer"
import Qcheckbox from "../components/q_checkbox"
import Qselectclass from "../components/q_select-class"
import Qdate from "../components/q_date"
import Qprepop from "../components/q_prepop"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"


const Car2Drivers = () => {

  return (
    <div style={{ backgroundColor: '#fff', paddingBottom: '10px' }}>
      <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563874296/m.cover_new/car2-questions_head.jpg" />
      <div className="questions-wrapper">
        <Qcheckbox id="drivers2" question="Who will drive this car?" options={[{ name: "Tom Baggins", checked: true }, { name: "Martha Baggins", checked: false }]} />
        <Link to="/driver2-questions"><p>+ Add another driver</p></Link>
      </div>
      <Navbutton
        to="/driver1-questions"
        type="primary btn-block"
        cta="Add this car"
        id="addCarButton1"
      />
    </div>
  )
}

export default Car2Drivers
