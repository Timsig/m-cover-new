import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/header"
import Qtext from "../components/q_textinput"
import Qselect from "../components/q_select"
import Qradio from "../components/q_radiolist"
import Qdate from "../components/q_date"
import Qlicence from "../components/q_licence"
import Qprepop from "../components/q_prepop"
import Qnumber from "../components/q_numbuttons"
import Footer from "../components/footer"
import Navbutton from "../components/molecules/navbutton"

const Car1DCQuestions = () => {

  return (
    <div style={{ backgroundColor: '#fff', paddingBottom: '10px' }}>
      <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563895444/m.cover_new/car1-dc-questions_head.jpg" />
      <div className="questions-wrapper">
        
        <Qselect
          id="ncd"
          question="How many years no claim discount does Tom have to use on this car?"
          options={["0", "1", "2", "3", "4", "5", "6", "7", "8", "9 or more"]}
        />
        <Qselect
          id="usage"
          question="How will Tom use this car?"
          options={[
            "Social, domestic & pleasure",
            "Social, domestic & pleasure ",
            " - inc. commuting",
            "Business use, exc.",
            " - commercial travelling",
            "Business use, ",
            " - inc.commercial travelling",
          ]}
        />
        <Qdate
          question="When do you want the cover for this car to start?"
          id="startDate"
        />
        <section className="prepop-questions">
          <h4>Please check the following statements</h4>
          <Qprepop
            id="regKeeper"
            options={["Tom Baggins", "Martha Baggins"]}
            textafter="is the registered keeper of this car."
          />
          <Qprepop
            id="legalOwner"
            options={["Tom Baggins","Martha Baggins" ]}
            textafter="is the legal owner of this car."
          />
          <Qprepop
            id="NCD"
            textbefore="Tom earnt this no claim discount"
            options={[
              "Driving this or another car in the UK",
              "Driving this or another car overseas",
            ]}
            textafter="."
          />
        </section>
       
      </div>

      <Navbutton
        to="/policy-car1done"
        type="primary btn-block"
        cta="Add driver to this car"
        id="addDriverButton"
      />
    </div>

  )
}

export default Car1DCQuestions
