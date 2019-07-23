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
import Qlicence from "../components/q_licence"
import Qprepop from "../components/q_prepop"
import Qnumber from "../components/q_numbuttons"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"

const Driver1questions = () => {
  
  return (
    <div style={{ backgroundColor: '#fff', paddingBottom: '10px' }}>
      <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563811023/m.cover_new/driver1-questions_head.jpg" />
      <div className="questions-wrapper">
        <Qlicence
          id="driversLicence"
          question="If you know the policyholder's driving licence number, please complete it, below."
        />

        <Qnumber
          id="carsInHouse"
          question="How many cars and/or vans do you have in your household?"
          options={["1", "2", "3", "More than 3"]}
        />

        <section className="prepop-questions">
          <h4>Please check the following statements</h4>
          <Qprepop
            id="claimsAccidents"
            textbefore="Tom"
            options={["has not", "has"]}
            textafter="had any claims or accidents in the last five years, including whilst insured with us."
          />
          <Qprepop
            id="UKres"
            textbefore="Tom has been a UK resident for"
            options={[
              "more than 3 years",
              "3 years",
              "2 years",
              "1 year",
              "less than a year",
            ]}
            textafter="."
          />
        </section>
      </div>

      <Navbutton
        to="/car1-additional-drivers"
        type="primary btn-block"
        cta="Add driver to this car"
        id="addDriverButton"
      />
    </div>
    
  )
}

export default Driver1questions
