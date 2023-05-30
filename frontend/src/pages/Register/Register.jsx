import './Register.css'
import { Link } from 'react-router-dom';

import React from 'react'

function Register() {
  return (
    <div className='register-page'>
        <span className='register-page-title'>REGISTER HERE!</span>
         <input className='register-page__input1' type="text" placeholder="FULL NAME*" name="name" required/>
         <input className='register-page__input2' type="text" placeholder="EMAIL*" name="email" required/>
         <input className='register-page__input3' type="password" placeholder="PASSWORD*" name="pswrd" required/>
         <input className='register-page__input4' type="password" placeholder="CONFIRM PASSWORD*" name="con_pswrd" required/>
         <button className='register-page__submit' type="submit">REGISTER</button>
         <span className='register-page__text3'> Already have an account? <Link to='/login' className='register-page__direct'> Login here </Link> </span>
    </div>
  )
}

export default Register