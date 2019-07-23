import React from "react"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"
import Car1LookupB from './car1-lookup-b'
import { Link } from "react-router-dom";

const car2DcA2 = () => (
  <div>

    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563893851/m.cover_new/car2-d_c-a2.jpg" />

    <Hotspot left={12} top={331} width={296} height={44} dest="/car2-dc-c" />
  </div>
)

export default car2DcA2;