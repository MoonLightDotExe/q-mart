import React, { useState } from 'react'
import './Item.css'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { GrFormAdd } from "react-icons/gr";
import Accondion_button from '../Accordion_button';

const ItemSelector = () => {
  const [show, setshow] = useState(false)
  const [view, setview] = useState(false)
  const [move, setmove] = useState(false)
  const [hold, sethold] = useState(false)
  return (
      <div className="main"> 
      <div className='Item-Selector'>
        <div className="title">
            VARIATIONS
            <span dir='ltr'>(13)</span>
        </div>
        <div className="Item-Selector-Image">
          
            {/* // change anchor tag into Link tag// */}
            <a href=''>
            <img src="images/img1.jpg"alt='/'></img>
            </a>
            <a href=''>
            <img src="images/img2.jpg"alt='/'></img>
            </a>
            <a href=''>
            <img src="images/img3.jpg"alt='/'></img>
            </a>
            <a href=''>
            <img src="images/img4.jpg"alt='/'></img>
            </a>
            <a href=''>
            <img src="images/img5.jpg"alt='/'></img>
            </a>
            <a href=''>
            <img src="images/img6.jpg"alt='/'></img>
            </a>
            <a href=''>
            <img src="images/img7.jpg"alt='/'></img>
            </a>
            <a href=''>
            <img src="images/img8.jpg"alt='/'></img>
            </a>
        </div>
       <Accondion_button 
       title =" Materials And Care"
       aboutText="Q-Mart products are made with carefully selected materials. Please handle with care for longer product life."
       about1="Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under Jordan Bran"
       about2="Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth"
       about3="The slip-on shoe is inspired by the skin of deadly snakes."
       />
       <Accondion_button 
       title =" Materials And Care"
       aboutText="Q-Mart products are made with carefully selected materials. Please handle with care for longer product life."
       about1="Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under Jordan Bran"
       about2="Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth"
       about3="The slip-on shoe is inspired by the skin of deadly snakes."
       />
       <Accondion_button 
       title =" Materials And Care"
       aboutText="Q-Mart products are made with carefully selected materials. Please handle with care for longer product life."
       about1="Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under Jordan Bran"
       about2="Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth"
       about3="The slip-on shoe is inspired by the skin of deadly snakes."
       />
       <Accondion_button 
       title =" Materials And Care"
       aboutText="Q-Mart products are made with carefully selected materials. Please handle with care for longer product life."
       about1="Air Jordan is a line of basketball shoes produced by Nike, Inc. Related apparel and accessories are marketed under Jordan Bran"
       about2="Protect from direct light, heat and rain. Should it become wet, dry it immediately with a soft cloth"
       about3="The slip-on shoe is inspired by the skin of deadly snakes."/>
    </div>
    </div>
  )
}

export default ItemSelector





