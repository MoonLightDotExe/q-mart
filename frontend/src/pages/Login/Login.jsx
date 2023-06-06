import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import React, {useState} from 'react'
import {FcGoogle} from 'react-icons/fc'
import {BsApple} from 'react-icons/bs'

import './Login.css'

function Login() {
    const[text,setText] = useState();
    const[disable,setDisable] = useState(false);
    const[message,setMessage] = useState('');

    const[text1,setText1] = useState();
    const[disable1,setDisable1] = useState(false);
    const[message1,setMessage1] = useState('');

    const handleChange = (e) => {
      if (text === ''){
        setDisable(false);
        setMessage(null);
      }
      else if (text !== '' && e.target.value.length<=10){
        setDisable(true);
        setMessage('Please enter a valid email address')
      }
      else {
        setDisable(false);
        setMessage(null)
      }

      setText(e.target.value)
    }

    const handleDone = (e) => {
      if (text1 === ''){
        setDisable1(false);
        setMessage1(null);
      }
      else if (text1 !== '' && e.target.value.length<=8){
        setDisable1(true);
        setMessage1('Password must atleast be 8 characters')
      }
      else {
        setDisable1(false);
        setMessage1(null)
      }

      setText1(e.target.value)
    }


  return (

    <div className='login-page'>

      <span className='login-page__header'><h1>MY Q-MART ACCOUNT</h1></span>

      <div className='login-page__account'>
        <button id="google-button" >
            <FcGoogle size={40}/>
            <span className='google-text'>CONTINUE WITH GOOGLE</span>
        </button>
        <button id="apple-button" >
            <BsApple size={36} color={'#333333'}/>
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
            <input 
              className={`login-page__input1 ${disable ? `disable`: ``}` }
              type="text" 
              placeholder="EMAIL*"
              name="email" 
              value={text}
              onChange={handleChange}
              required
            />
            {disable && <div className='login-red'>{message}</div>}

            {/* <label for="pswrd">Your password</label> */}
            <input 
              className={`login-page__input2 ${disable1 ? `disable`: ``}` }
              type="password" 
              placeholder="PASSWORD*"
              name="pswrd" 
              value={text1}
              onChange={handleDone} 
              required
              />
              {disable1 && <div className='login-red1'>{message1}</div>}
        </div>
        <br/>
        <button className='login-page__submit' type="submit">CONTINUE</button>

        <span className='login-page__text3'> Not a member? <Link to='/register' className='login-page__direct'> Register now </Link> </span>

      </form>
    </div>
  )
}


export default Login

// const[rating,setRating] = useState('10');

// const{handelAdd} = useContext(FeedbackContext)