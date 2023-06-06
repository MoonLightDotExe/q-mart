import React from 'react'
import './Accordion_button.css'
import { GrFormAdd } from "react-icons/gr";
import { useState } from 'react';
import PropTypes from 'prop-types'

const Accordion_button = (props) => {
  const [show, setshow] = useState(false)
  
  return (
    
      <div className="accordion-button">
      {props.title}
      <div className='a' onClick={()=>setshow(!show)} >
            <GrFormAdd
             size = {24}
             style = {{color: 'black'}}
             /> 
          </div>
    
    { show &&
    <div className="info">
      <p>
      {props.aboutText}
      </p>
      <li>
        {props.about1}
        </li>
        <li>
        {props.about2}
        </li>
        <li>
        {props.about3}
        </li>
    </div>
}
<hr />
</div>


    
  )
}
Accordion_button.propType ={
  title:PropTypes.string,
  aboutText:PropTypes.string,
  
}
// Accordion_button.defaultProps = { title:
//   aboutText:        
// }

export default Accordion_button
