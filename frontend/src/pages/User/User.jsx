import React from 'react'
import { FcLock } from 'react-icons/fc'
import { FiPackage } from 'react-icons/fi'

import UserCard from './../../components/UserCard/UserCard'

import './User.css'
function User() {
  return (
    <div className='user'>
      <div className='user-head'>
        <span className='user-head-text'>Your Account</span>
        <div className='user-options'>
          <div className='user-option-item'>
            <UserCard
              icon={<FcLock />}
              title='Login & Security'
              desc='Edit your account details'
            />
          </div>
          <div className='user-option-item'>
            <UserCard
              icon={<FiPackage />}
              title='Your Orders'
              desc='Track,Return or buy things again'
            />
          </div>
          <div className='user-option-item'></div>
          <div className='user-option-item'></div>
          <div className='user-option-item'></div>
        </div>
      </div>
    </div>
  )
}

export default User
