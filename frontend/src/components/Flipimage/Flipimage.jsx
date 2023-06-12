import React, { useState } from 'react'

import { FiHeart } from 'react-icons/fi'
import { BsFillSuitHeartFill } from 'react-icons/bs'

import Heart from '../Heart/Heart'

import './Flipimage.css'

const Flipimage = () => {

    return (
        <div className="flip-container">
            <a href="">
                <div className="heart-div">
                    <button className="heart-btn">
                        <Heart />
                    </button>
                </div>
                {/* <div className="flip-image"></div> */}
                <img src={slide.image1} className='flip-image' alt="" />
            </a>
            <div className="flip-text">
                <Data
                    name={'Sasta Gucci Bag'}
                    price={'$100'}
                />
            </div>
        </div>
    )
}

function Data(props) {
    return (
        <>
            <div className="flip-name">{props.name}</div>
            <br />
            <div className="flip-price">{props.price}</div>
            <a
                href=""
                className="flip-shop"
            >
                Shop Now!
            </a>
        </>
    )
}

export default Flipimage