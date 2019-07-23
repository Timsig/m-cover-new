import React from "react"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"


const car2Dc = () => (
  <div>

    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563893851/m.cover_new/car2-d_c-a.jpg" />
    <Hotspot left={12} top={282} width={298} height={43} dest="/car2-dc-b" />
    <Hotspot left={12} top={324} width={149} height={43} dest="/driver2-questions-a" />
  </div>
)

export default car2Dc;