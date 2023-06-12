import { Link } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import userContext from '../../context/userContext'

import './Register.css'

function Register() {
  const { success, registerUser } = useContext(userContext)

  const navigate = useNavigate()

  const [text, setText] = useState()
  const [pass, setPass] = useState()
  const [disable1, setDisable1] = useState(false)
  const [message1, setMessage1] = useState('')
  const [disable, setDisable] = useState(false)
  const [message, setMessage] = useState('')

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
    registerUser(text, pass)
    if (success) {
      navigate('/user')
    } else {
      navigate('/register')
    }
  }
  return (
    <div className='register-page'>
      <span className='register-page-title'>REGISTER HERE!</span>
      <form onSubmit={handleSubmit}>
        <input
          className='register-pageinput1'
          type='text'
          placeholder='FULL NAME*'
          name='name'
          required
        />
        <input
          className='register-pageinput2'
          type='text'
          placeholder='EMAIL'
          name='email'
          value={text}
          onChange={handleEmail}
          required
        />
        <input
          className='register-pageinput3'
          type='password'
          placeholder='PASSWORD'
          name='pswrd'
          value={pass}
          onChange={handlePass}
          required
        />
        <input
          className='register-pageinput4'
          type='password'
          placeholder='CONFIRM PASSWORD*'
          name='con_pswrd'
          required
        />
        <button
          className='register-pagesubmit'
          type='submit'
        >
          REGISTER
        </button>
      </form>
      <span className='register-pagetext3'>
        {' '}
        Already have an account?{' '}
        <Link
          to='/login'
          className='register-pagedirect'
        >
          {' '}
          Login here{' '}
        </Link>{' '}
      </span>
    </div>
  )
}

export default Register
