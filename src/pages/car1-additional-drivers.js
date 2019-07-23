import React from "react"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"

const car1AdditionalDrivers = () => (
  <React.Fragment>

    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563875652/m.cover_new/car1-additional-drivers.jpg" />
    <Hotspot left={126} top={345} width={90} height={40} dest="/car1-dc-questions" />
  </React.Fragment>
)

export default car1AdditionalDrivers;