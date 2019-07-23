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


const Car2questions = () => {

  return (
    <div style={{ backgroundColor: '#fff', paddingBottom: '10px' }}>
      <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563874296/m.cover_new/car2-questions_head.jpg" />
      <div className="questions-wrapper">
        <Qselect
          question="When was this car bought?"
          options={[
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
          ]}
        />
        <Qselect
          question="What's this car's estimated annual mileage?"
          options={[
            "0-1000",
            "1,001 - 2,000",
            "2,001 - 3,000",
            "3,001 - 4,000",
            "4,001 - 5,000",
            "6,001 - 7,000",
            "7,001 - 8,000",
            "8,001 - 9,000",
            "9,001 - 10,000",
            "10,001 - 11,000",
            "11,001 - 12,000",
            "12,001 - 13,000",
            "13,001 - 14,000",
            "14,001 - 15,000",
            "15,001 - 16,000",
            "16,001 - 17,000",
            "17,001 - 18,000",
            "18,001 - 19,000",
            "19,001 - 20,000",
            "20,001 - 25,000",
            "25,001 - 30,000",
            "30,001 - 35,000",
            "35,001 - 40,000",
            "40,001 - 45,000",
            "45,001 - 50,000",
            "50,000+",
          ]}
        />
        <Qselect
          question="Where is this car kept overnight?"
          options={[
            "Drive",
            "Garage",
            "Road",
            "Secure Car Park",
            "Unsecure Car Park",
          ]}
        />
        <Qcheckbox
          question="Does this car have any of the following safety features? (We already know if it has AEB)."
          options={["Parking/reversing sensors", "Dash cam"]}
        />

        <section className="prepop-questions">
          <h4>Please check the following statements</h4>
          <Qprepop
            id="mods"
            textbefore="Apart from any safety feaures you've already told us about, the car"
            options={["has not", "has"]}
            textafter="been modified."
          />
          <Qprepop
            id="kept@home"
            textbefore="The car"
            options={["is", "is not"]}
            textafter="ususally kept at my home address overnight."
          />
        </section>
      </div>
      <Navbutton
        to="/car2-dc-a"
        type="primary btn-block"
        cta="Add this car"
        id="addCarButton1"
      />
    </div>
  )
}

export default Car2questions
