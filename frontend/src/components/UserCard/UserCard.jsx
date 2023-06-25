import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './UserCard.css'

function UserCard({ icon, title, desc, link }) {
  const [hover, setHover] = useState(false)
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(link)
  }

  const hoverIn = () => {
    setHover(true)
  }
  const hoverOut = () => {
    setHover(false)
  }

  return (
    <div
      className={`userCard ${hover ? `userCard-hover` : ``}`}
      onMouseEnter={hoverIn}
      onMouseLeave={hoverOut}
      onClick={handleClick}
    >
      <div className={`userCard-icon ${hover ? `icon-hover` : ``}`}>{icon}</div>
      <div className={`userCard-text ${hover ? `hover-true` : ``}`}>
        <div className='userCard-text-primary'>{title}</div>
        <div className='userCard-text-secondary'>{desc}</div>
      </div>
    </div>
  )
}

export default UserCard
