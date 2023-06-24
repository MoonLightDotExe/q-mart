import React from 'react'
import { useState } from 'react'

import './UserCard.css'

function UserCard({ icon, title, desc }) {
  const [hover, setHover] = useState(false)

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
