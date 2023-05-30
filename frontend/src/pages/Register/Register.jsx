import './Register.css'
import React from 'react'

function Register() {
  return (
    <div>
         <input className='login-page__input1' type="text" placeholder="NAME*" name="name" required/>
         <input className='login-page__input2' type="text" placeholder="EMAIL*" name="email" required/>
         <input className='login-page__input3' type="password" placeholder="PASSWORD*" name="pswrd" required/>
         <input className='login-page__input4' type="password" placeholder="CONFIRM PASSWORD*" name="con_pswrd" required/>
    </div>
  )
}

export default Register