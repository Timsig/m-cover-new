import React from "react"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"

import { Link } from "react-router-dom";

    
const car2Lookup = () => (
  <div>

    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563873922/m.cover_new/car2-lookup.jpg" />
      <Hotspot left={31} top={226} width={120} height={40} dest="/car2-lookup-b" />
    </div>
)

export default car2Lookup;