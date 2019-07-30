import React from "react"
import Header from "../components/header"
import Hotspot from "../components/molecules/hotspot"
const policy = () => (
  <React.Fragment>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1564488781/m.cover_new/policy-so-far.jpg" />
    <Hotspot left={170} top={709} width={138} height={48} dest="/quote" />
  </React.Fragment>
)

export default policy;