import React, { useState } from 'react';
import Data from '../../data/mCarousel'

import './Mcarousel.css'

function Mcarousel() {
  
const [index, setIndex] = useState(0); 
const length = 5;

const handlePrevious = () => {
  const newIndex = index - 1;
  setIndex(newIndex < 0 ? length - 1 : newIndex);
};

const handleNext = () => {
  const newIndex = index + 1;
  setIndex(newIndex >= length ? 0 : newIndex);
};

return (
  <div className="carousel">
    {Data.map(post => (
        <div key={post.index} className='mCarousel'>
            <img src={post.place1} alt="" className='mCarousel-image1' />
            <img src={post.place2} alt="" className='mCarousel-image2' />
            <button onClick={handlePrevious}>Previous</button>
            <button onClick={handleNext}>Next</button>
            <p>{index}</p>
        </div>
        ))
      }
    
  </div>
);
  
//   return (
    
//     <div className='mCarousel-container'>
      
//     </div>
    
//   )
}

export default Mcarousel

