import React, { useState, useEffect } from 'react'

import { FiHeart } from 'react-icons/fi'
import { BsFillSuitHeartFill } from 'react-icons/bs'

import './Heart.css'

function Heart() {
  const [like, setLike] = useState(<FiHeart />)
  return (
    <div className="heart">
      <button className="heart-button">{like}</button>
    </div>
  )
}

export default Heart