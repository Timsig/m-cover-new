import React from "react"
import Hotspot from '../components/molecules/hotspot'
import Header from "../components/header"
import Car1LookupB from './car1-lookup-b'
import { Link } from "react-router-dom";

const car1Lookup = () => (
  <div>
    
    <Header image="https://res.cloudinary.com/lwcqviihu/image/upload/v1563797256/m.cover_new/car1-lookup.jpg" />
    <Hotspot left={31} top={196} width={120} height={40} dest="/car1-lookup-b"/>
  </div>
)

export default car1Lookup;