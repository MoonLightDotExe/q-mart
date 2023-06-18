import React from 'react'
import './Navbar.css';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom'
import {AiOutlineUser } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';  
import { AiOutlineShopping  } from "react-icons/ai";
import {AiOutlineBars} from "react-icons/ai";
import Shop from './Shop/Shop';
function Navbar() {
  return (
    <div className="container">
      <div className="contact">contact us</div>
        <div className='Nav'>Q-Mart</div>
      <ul className='menu'>
        <li>
          <a href="/">
            <AiOutlineUser
             size = {24}
             style = {{color: 'black'}}
             /> 
          </a>
        </li>
        <li>
          <a href="/Shop">
            <AiOutlineShopping 
            size = {24}
            style={{ color: 'black' }}/> 
          </a>
         
        </li>
        <li>
          <a href="/">
            <BiSearch
            size = {24}
            style={{ color: 'black' }}/> 
          </a>
        </li>
        <li>
          <a href="/">
            <AiOutlineBars
            size = {24}
            style={{ color: 'black' }}/> 
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
