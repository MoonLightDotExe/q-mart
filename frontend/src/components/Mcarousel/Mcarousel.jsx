import React, {useState, useEffect} from 'react'
import {Data} from '../../data/mCarousel'
import {TbMathGreater, TbMathLower} from 'react-icons/tb'
import {BsHeadset} from 'react-icons/bs'

import './Mcarousel.css'

const Mcarousel = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length-1 : current-1);
    }

    console.log(current);

    if (!Array.isArray(slides) || slides.length <= 0 ) {
        return null;
    }

    return (
        <section className='slider'>
            <TbMathLower className='left-arrow' onClick={prevSlide}/>
            <TbMathGreater className='right-arrow' onClick={nextSlide}/>
            {Data.map((slide,index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        <div className='container-inner'>
                                <h2>JACKIE 1961 PEPE SHIRT </h2>
                                <h2>$2,700</h2>
                                <span>AVAILABLE IN STORE ONLY</span>       
                                <p>&nbsp; Click on FIND IN STORE to find this item in a nearest
                                    store or contact our Client Advisor for further assistance</p>
                                <button type="submit" className='container-btn1'>FIND IN STORE</button>
                                <button type="submit" className='container-btn2'> <BsHeadset size={20} />CONTACT US</button>
                        </div>
                        {index === current && (
                        <div className='container'>                            
                            <img src={slide.image1} className='image1'/>
                            <img src={slide.image2} className='image2'/>
                        </div>
                        )}
                    </div>
                )   
            })}
        </section>
    )
};

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

