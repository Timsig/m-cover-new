import React from "react"
import { Link } from "react-router-dom"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"



const car1LookupB = () => (
  <div>
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563797256/m.cover_new/car1-lookup-b.jpg" />
    <Hotspot left={159} top={196} width={131} height={40} dest="/car1-questions" />
  </div>
)

export default car1LookupB;