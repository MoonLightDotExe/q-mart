import React, { useState } from 'react'

import { TfiAngleRight } from 'react-icons/tfi'
import { TfiAngleLeft } from 'react-icons/tfi'
import Smallcar from '../data/Smallcarousel'
import './Smallcarousel.css'

// import './Smallcarousel.css'

const Smallcarousel = ({ slides }) => {
  const [click, setClick] = useState(0)
  const length = Smallcar.length

  const nextClick = () => {
    setClick(click === length - 1 ? 0 : click + 1)
  }
  const prevClick = () => {
    setClick(click === 0 ? length - 1 : click - 1)
  }
  return (
    <div className="smallcarousel">
      <button
        className="car-button"
        onClick={prevClick}
      >
        <TfiAngleLeft />
      </button>
      {Smallcar.map((item, index) => (
        <div
          className={
            index === click
              ? 'smallcarousel-container active'
              : 'small-container'
          }
        >
          {index === click && (
            <div
              className="small-div"
              id="div1"
              key={index}
            >
              <img
                src={item.img1}
                alt=""
                className="img"
                id="img1"
              />
              <img
                src={item.img2}
                alt=""
                className="img"
                id="img2"
              />
              <img
                src={item.img3}
                alt=""
                className="img"
                id="img3"
              />
              <img
                src={item.img4}
                alt=""
                className="img"
                id="img4"
              />
            </div>
          )}
        </div>
      ))}
      <button
        className="car-button"
        onClick={nextClick}
      >
        <TfiAngleRight />
      </button>
    </div>
  )
}

export default Smallcarousel