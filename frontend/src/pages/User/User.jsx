import React from 'react'
import { FcLock } from 'react-icons/fc'
import { FiPackage } from 'react-icons/fi'
import { MdOutlineWorkspacePremium } from 'react-icons/md'
import { BsCreditCardFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'
import { BiSupport } from 'react-icons/bi'

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
              link='./security'
            />
          </div>
          <div className='user-option-item'>
            <UserCard
              icon={<FiPackage />}
              title='Your Orders'
              desc='Track,Return or buy things again'
              link='./orders'
            />
          </div>
          <div className='user-option-item'>
            <UserCard
              icon={<MdOutlineWorkspacePremium />}
              title='Premium'
              desc='Check out the benefits of Premium'
              link='/premium'
            />
          </div>
          <div className='user-option-item'>
            <UserCard
              icon={<BsCreditCardFill color='#36aeff' />}
              title='Payments'
              desc='Edit or add Payment Options'
              link='./payment-options'
            />
          </div>
          <div className='user-option-item'>
            <UserCard
              icon={<ImLocation color='orange' />}
              title='Your Addresses'
              desc='Add or Edit your addresses for delivery'
              link='./addresses'
            />
          </div>
          <div className='user-option-item'>
            <UserCard
              icon={<BiSupport />}
              title='Customer Support'
              link='/support-desk'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
