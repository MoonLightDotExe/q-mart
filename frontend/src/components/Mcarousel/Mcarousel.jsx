import React, {useState, useEffect} from 'react'
import Data from '../../data/mCarousel'
import Mcard from '../Mcard/Mcard'

import './Mcarousel.css'

function Mcarousel() {
  let box = document.querySelector('.product-container');
  
  const btnpressprev = () => {
    let  width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  }
  const btnpressnext = () => {
    let  width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width;
    console.log(width);
  }
  return (
  <div className='product-carousel'>

    <button className='pre-btn' onClick={btnpressprev}> <p>&lt;</p> </button>
    <button className='next-btn' onClick={btnpressnext}> <p>&gt;</p> </button>
    <div className='product-container'>
      <Mcard cardno='1'/>
      <Mcard cardno='2'/>
      <Mcard cardno='3'/>
      <Mcard cardno='4'/>
      <Mcard cardno='5'/>
      <Mcard cardno='6'/>
      <Mcard cardno='7'/>
      <Mcard cardno='8'/>
      <Mcard cardno='9'/>
      <Mcard cardno='10'/>
    </div>

  </div>
)
}

export default Mcarousel


// import React, { useState } from 'react';
// import Data from '../../data/mCarousel'

// import './Mcarousel.css'

// function Mcarousel() {
  
// const [index, setIndex] = useState(0); 
// const length = 5;

// const handlePrevious = () => {
//   const newIndex = index - 1;
//   setIndex(newIndex < 0 ? length - 1 : newIndex);
// };

// const handleNext = () => {
//   const newIndex = index + 1;
//   setIndex(newIndex >= length ? 0 : newIndex);
// };

// return (
//   <div className="carousel">
//     {Data.map(post => (
//         <div key={post.index} className='mCarousel'>
//             <img src={post.place1} alt="" className='mCarousel-image1' />
//             <img src={post.place2} alt="" className='mCarousel-image2' />
//             <button onClick={handlePrevious}>Previous</button>
//             <button onClick={handleNext}>Next</button>
//             <p>{index}</p>
//         </div>
//         ))
//       }
    
//   </div>
// );
// }

// export default Mcarousel

