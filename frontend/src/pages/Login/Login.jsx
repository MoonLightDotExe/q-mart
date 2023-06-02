import { useState, useContext } from 'react'

import userContext from '../../context/userContext'

import './Login.css'

function Login() {
  const [text, setText] = useState()
  const [disable, setDisable] = useState(false)
  const [message, setMessage] = useState('')

  const { sidebar } = useContext(userContext)

  const handleChange = (e) => {
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
  }

  return (
    <div className={`login-page ${sidebar ? `blur` : ``}`}>
      <span className='login-page__header'>
        <h1>MY Q-MART ACCOUNT</h1>
      </span>

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

      <form action=''>
        <div className='headingsContainer'>
          <h3 className='login-page__text1'>
            CONTINUE WITH YOUR EMAIL ADDRESS
          </h3>

          <p className='login-page__text2'>
            Sign in with your Q-MART email and password or create a profile if
            you are new.
          </p>
        </div>
        <div className='mainContainer'>
          <input
            className={`login-page__input1 ${disable ? `disable` : ``}`}
            type='text'
            placeholder='EMAIL*'
            name='email'
            value={text}
            onChange={handleChange}
            required
          />

          <input
            className='login-page__input2'
            type='password'
            placeholder='PASSWORD*'
            name='pswrd'
            required
          />
        </div>
        <br />
        <button
          className='login-page__submit'
          type='submit'
        >
          CONTINUE
        </button>
      </form>
    </div>
  )
}

export default Login
