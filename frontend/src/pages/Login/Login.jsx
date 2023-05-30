import './Login.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';

import React from 'react'

function Login() {
  return (
    <div className='login-page'>

      <span className='login-page__header'><h1>MY Q-MART ACCOUNT</h1></span>

      <div className='login-page__account'>
        <button id="google-button" >
            <img className='google-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327" alt="buttonpng" border="0" width="35" height="35" />
            <span className='google-text'>CONTINUE WITH GOOGLE</span>
        </button>
        <button id="apple-button" >
            <img className='apple-img' src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="buttonpng" border="0" width="30" height="35" />
            <span className='apple-text'>CONTINUE WITH APPLE</span>
        </button>
      </div>

      <span className='login-page__or'>OR</span>

      <form action="">
        <div class="headingsContainer">
            <h3 className='login-page__text1'>CONTINUE WITH YOUR EMAIL ADDRESS</h3>

            <p className='login-page__text2'>Sign in with your Q-MART email and password or create a profile if you are new.</p>
        </div>
        <div class="mainContainer">           
            {/* <label for="username">Your username</label>            */}
            <input className='login-page__input1' type="text" placeholder="EMAIL*" name="email" required/>
            {/* <label for="pswrd">Your password</label> */}
            <input className='login-page__input2' type="password" placeholder="PASSWORD*" name="pswrd" required/>
        </div>
        <br/>
        <button className='login-page__submit' type="submit">CONTINUE</button>

        <span className='login-page__text3'> Not a member? <Link to='/register' className='login-page__direct'> Register now </Link> </span>

      </form>
    </div>
  )
}


export default Login
