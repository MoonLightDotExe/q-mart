import React, {useState} from 'react'
import Mcarousel from '../../components/Mcarousel/Mcarousel'
import {Data} from '../../data/mCarousel'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

import './Main.css'

function Main() {
  return (
    <>
      <Mcarousel slides={Data}/>
    </>  
  )
}

export default Main