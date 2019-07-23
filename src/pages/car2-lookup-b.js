import React from "react"
import { Link } from "react-router-dom"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"



const car2LookupB = () => (
  <div>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563873922/m.cover_new/car2-lookup-b.jpg" />
    <Hotspot left={159} top={226} width={131} height={40} dest="/car2-questions" />
  </div>
)

export default car2LookupB;