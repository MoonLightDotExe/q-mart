import React from 'react'
import { BiErrorCircle } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import './NotFound.css'

function NotFound() {
  return (
    <>
      <div className='not-found'>
        <div className='not-found--head'>
          <BiErrorCircle /> ERROR 404
        </div>
        <div className='not-found--desc'>
          Page not found. Are you sure you want to be here?
        </div>
        <div className='not-found-l'>
          Back to{' '}
          <Link
            to='/'
            className='not-found--link'
          >
            Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default NotFound
