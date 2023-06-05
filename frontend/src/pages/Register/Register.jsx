import './Register.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import userContext from '../../context/userContext'

import React from 'react'

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
    <form
      className='register-page'
      onSubmit={handleSubmit}
    >
      <span className='register-page-title'>REGISTER HERE!</span>
      <input
        className='register-page__input1'
        type='text'
        placeholder='FULL NAME*'
        name='name'
        required
      />
      <input
        className='register-page__input2'
        type='text'
        placeholder='EMAIL*'
        name='email'
        required
      />
      <input
        className='register-page__input3'
        type='password'
        placeholder='PASSWORD*'
        name='pswrd'
        required
      />
      <input
        className='register-page__input4'
        type='password'
        placeholder='CONFIRM PASSWORD*'
        name='con_pswrd'
        required
      />
      <button
        className='register-page__submit'
        type='submit'
      >
        REGISTER
      </button>
      <span className='register-page__text3'>
        {' '}
        Already have an account?{' '}
        <Link
          to='/login'
          className='register-page__direct'
        >
          {' '}
          Login here{' '}
        </Link>{' '}
      </span>
    </form>
  )
}

export default Register
