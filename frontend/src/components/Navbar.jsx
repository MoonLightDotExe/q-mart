import React from 'react'
import { useState } from 'react'

import { Link, NavLink } from 'react-router-dom'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineShopping } from 'react-icons/ai'
import { AiOutlineBars } from 'react-icons/ai'

import './Navbar.css'

function Navbar() {
  const [scroll, setScroll] = useState(false)

  const onScroll = () => {
    if (window.scrollY > 200) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  window.addEventListener('scroll', onScroll)

  return (
    <div className={`container ${scroll ? `fix` : ``}`}>
      <div className='contact'>contact us</div>
      <div className='Nav'>Q-Mart</div>
      <ul className='menu'>
        <li>
          <a href='/'>
            <AiOutlineUser
              size={24}
              style={{ color: 'black' }}
            />
          </a>
        </li>
        <li>
          <a href='/'>
            <AiOutlineShopping
              size={24}
              style={{ color: 'black' }}
            />
          </a>
        </li>
        <li>
          <a href='/'>
            <BiSearch
              size={24}
              style={{ color: 'black' }}
            />
          </a>
        </li>
        <li>
          <a href='/'>
            <AiOutlineBars
              size={24}
              style={{ color: 'black' }}
            />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
