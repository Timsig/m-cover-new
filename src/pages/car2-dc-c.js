import React from "react"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"
import Car1LookupB from './car1-lookup-b'
import { Link } from "react-router-dom";

const car2DcA2 = () => (
  <div>

    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563893851/m.cover_new/car2-d_c-c.jpg" />

    <Hotspot left={20} top={554} width={281} height={48} dest="/car2-dc-questions" />
  </div>
)

export default car2DcA2;