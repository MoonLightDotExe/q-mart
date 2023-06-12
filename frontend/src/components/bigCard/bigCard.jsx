import React from 'react'

import './bigCard.css'

const bigCard = () => {
  return (
    <>
      <div className='bigcard-container'>
        <div className='temp'></div>

        <div className='big-image'></div>
        <div className='bigcard-bottom'>
          <h1 className='big-text'>GUCCI SUMMER STORIES</h1>
          <button
            className='bigcard-btn'
            activeClassName='active-b-btn'
          >
            I am Button
          </button>
        </div>
      </div>
    </>
  )
}

export default bigCard
