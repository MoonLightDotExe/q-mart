import React from 'react'
import { useState, useContext } from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { BiSearch } from 'react-icons/bi'
import { AiOutlineShopping } from 'react-icons/ai'
import { AiOutlineBars } from 'react-icons/ai'

import userContext from '../context/userContext'

import './Navbar.css'

function Navbar() {
  const { sidebar, setSidebar } = useContext(userContext)

  const [scroll, setScroll] = useState(false)

  const onScroll = () => {
    if (window.scrollY > 200) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleSidebar = () => {
    setSidebar(!sidebar)
  }

  window.addEventListener('scroll', onScroll)

  return (
    <>
      <div
        className={`container-nav ${scroll ? `fix` : ``} ${
          sidebar ? `blur` : ``
        }`}
      >
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
            <button
              className='sidebar_toggle'
              onClick={handleSidebar}
            >
              <AiOutlineBars
                size={24}
                style={{ color: 'black' }}
              />
            </button>
          </li>
        </ul>
      </div>
      <div className={`sidebar ${sidebar ? `active` : `inactive`}`}>
        <button
          className='sidebar_toggle inner'
          onClick={handleSidebar}
        >
          <AiOutlineBars
            size={24}
            style={{ color: 'black' }}
          />
        </button>
        <div className='sidebar-container'>
          <div className='sidebar-container--element'>Pride Collection</div>
          <div className='sidebar-container--element'>Whats New</div>
          <div className='sidebar-container--element'>Travel</div>
          <div className='sidebar-container--element'>Handbags</div>
          <div className='sidebar-container--element'>Women</div>
          <div className='sidebar-container--element'>Men</div>
          <div className='sidebar-container--element'>Children</div>
          <div className='sidebar-container--element'>Jewellery</div>
          <div className='sidebar-container--element'>Vault</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
