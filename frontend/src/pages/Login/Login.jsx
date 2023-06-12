import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import userContext from '../../context/userContext'

import './Login.css'

function Login() {
  const [text, setText] = useState()
  const [disable, setDisable] = useState(false)
  const [message, setMessage] = useState('')

  const [pass, setPass] = useState()
  const [disable1, setDisable1] = useState(false)
  const [message1, setMessage1] = useState('')

  const handleEmail = (e) => {
    if (text === '') {
      setDisable(false)
    }
    if (e.target.value.length <= 10) {
      setDisable(true)
      setMessage('Email must be at least 10 characters long')
    } else {
      setDisable(false)
      setMessage()
    }
    setText(e.target.value)
  }
  const navigate = useNavigate()

  const { sidebar, loginUser, success } = useContext(userContext)

  const handlePass = (e) => {
    if (pass === '') {
      setDisable1(false)
    }
    if (e.target.value.length <= 10) {
      setDisable1(true)
      setMessage1('Password must be at least 10 characters long')
    } else {
      setDisable1(false)
      setMessage1()
    }
    setPass(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    loginUser(text, pass)
    if (success) {
      navigate('/user')
    } else {
      navigate('/register')
    }
  }

  return (
    <div className={`login-page ${sidebar ? `blur` : ``}`}>
      <h1 className='login-page__header'>MY Q-MART ACCOUNT</h1>

      <div className='login-page__account'>
        <button id='google-button'>
          <img
            className='google-img'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/882px-Google_%22G%22_Logo.svg.png?20230305195327'
            alt='buttonpng'
            border='0'
            width='35'
            height='35'
          />
          <span className='google-text'>CONTINUE WITH GOOGLE</span>
        </button>
        <button id='apple-button'>
          <img
            className='apple-img'
            src='https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg'
            alt='buttonpng'
            border='0'
            width='30'
            height='35'
          />
          <span className='apple-text'>CONTINUE WITH APPLE</span>
        </button>
      </div>

      <span className='login-page__or'>OR</span>

      <form onSubmit={handleSubmit}>
        <div className='headingsContainer'>
          <h3 className='login-page__text1'>
            CONTINUE WITH YOUR EMAIL ADDRESS
          </h3>

          <p className='login-page__text2'>
            Sign in with your Q-MART email and password or create a profile if
            you are new.
          </p>
        </div>
        <div class='mainContainer'>
          <input
            className={`login-page__input1 ${disable ? `disable` : ``}`}
            type='text'
            placeholder='EMAIL*'
            name='email'
            value={text}
            onChange={handleEmail}
            required
          />
          {disable && <div className='login-red'>{message}</div>}

          <input
            className={`login-page__input2 ${disable1 ? `disable` : ``}`}
            type='password'
            placeholder='PASSWORD*'
            name='pswrd'
            value={pass}
            onChange={handlePass}
            required
          />
          {disable1 && <div className='login-red1'>{message1}</div>}
        </div>
        <button
          type='submit'
          className='login-page__submit'
        >
          SUBMIT
        </button>
      </form>
    </div>
  )
}

export default Login
