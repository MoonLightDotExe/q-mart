import React, { useContext } from 'react'

import QmartContext from '../../context/QmartContext'
import CheckCard from '../../components/CheckoutCard/CheckCard'

import './Checkout.css'

function Checkout() {
  const { cart, setCart } = useContext(QmartContext)

  const onSubmit = () => {}

  const removeProd = () => {}

  return (
    <div className='checkout-container'>
      <CheckCard />
    </div>
  )
}

export default Checkout
