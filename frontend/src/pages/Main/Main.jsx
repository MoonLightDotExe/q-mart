import React, {useState} from 'react'
import Mcarousel from '../../components/Mcarousel/Mcarousel'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

import './Main.css'

function Main() {
  return (
    <div className='mheader'>
      Main
      <Mcarousel/>
    </div>
    
  )
}

export default Main