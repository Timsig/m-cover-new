import React from "react"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"
import Car1LookupB from './car1-lookup-b'
import { Link } from "react-router-dom";

const car2DcB = () => (
  <div>

    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563893851/m.cover_new/car2-d_c-b.jpg" />

    <Hotspot left={12} top={324} width={149} height={43} dest="/driver2-questions-b" />
  </div>
)

export default car2DcB;