import React, { useContext } from 'react'

import { HiOutlineShoppingBag } from 'react-icons/hi'
import QmartContext from '../../context/QmartContext'

import './CheckCard.css'

function CheckCard() {
  const { cart, setCart } = useContext(QmartContext)
  return (
    <>
      <div className='checkCard-container'>
        <div className='checkCard--info'>
          <div className='checkCard--username'>Om Amonkar</div>
        </div>
        <div className='checkCard--checkout'>
          <div className='checkCard--items'>
            <HiOutlineShoppingBag />
            {cart.length}
          </div>
          <div className='checkCard--list'>
            {cart.map((item) => {
              return (
                <div className='checkCard--element'>
                  <img
                    src={item.img}
                    alt='product_image'
                    className='checkCard--element__img'
                  />
                  <div className='checkCard--element__desc'>
                    <div className='checkCard--element__desc-1'>
                      {item.desc}
                    </div>
                  </div>
                  <div className='checkCard--element__pay'>
                    <div className='checkCard--element__qty'>{item.qty}</div>
                    <div className='checkCard--element__total'>
                      {item.total}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CheckCard
