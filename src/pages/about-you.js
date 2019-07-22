import React from "react"
import { Link } from "react-router-dom"


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
import Licence from "../components/q_licence"
import Header from "../components/header"

const IndexPage = () => (
  <React.Fragment>
  <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563784614/m.cover_new/about-you_head.jpg" />
  <main>
    <div className="questions-wrapper">
      <Qbuttons
        id="title"
        question="Title"
        options={["Mr", "Mrs", "Miss", "Ms", "Dr"]}
      />
      <Qtext id="firstName" question="First name" />
      <Qtext id="surName" question="Surname" />
      <Qdate id="DOB" question="Date of birth" />
      <Qrevealer
        id="Address"
        question="What's your postcode? Enter your home postcode and press ‘Find address’ – if you’re looking to insure a property other than the one you live in, you can add it later."
        selectId="address"
        selectQ="Please choose your address"
        selectOptions={["1 Acacia Avenue, Wingbourne", "2 Acacia Avenue, Wingbourne", "3 Acacia Avenue, Wingbourne"]}
      />
      <Qtext
        id="email"
        question="What email address should we send your documents to?"
      />
    

    <Footer>
      <div className="navrow">
        <Navbutton type="primary" to="/more-about-you" cta="Next >" />
      </div>
      <div className="saverow">
        <Navbutton type="secondary" cta="Save" to="/more-about-you" />
      </div>
    </Footer>
   </div >
  </main>
  </React.Fragment>
)

export default IndexPage
