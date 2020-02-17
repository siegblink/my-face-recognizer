import React, { useState } from 'react'
import { auth } from '../../firebase/firebase-utils'
import './SignIn.css'

export default function SignIn(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  async function handleSubmit(event) {
    event.preventDefault()
    const { email, password } = state
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setState({ ...state, email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className='main-area'>
      <div className='sign-in-area'>
        <div className='sign-in-area__form-container'>
          <h1 className='sign-in-area__header'>SmartBrain</h1>
          <div className='sign-in-area__title'>
            <h2 className='sign-in-area__text'>Sign In</h2>
          </div>
          <form id='form' onSubmit={handleSubmit}>
            <div className='sign-in-area__input-field'>
              <input
                className={`sign-in-area__text-field ${
                  state.email.length ? 'has-value' : ''
                }`}
                type='text'
                name='email'
                value={state.email}
                onChange={handleChange}
              />
              <label className='sign-in-area__text-field-label'>Username</label>
            </div>
            <div className='sign-in-area__input-field'>
              <input
                className={`sign-in-area__text-field ${
                  state.password.length ? 'has-value' : ''
                }`}
                type='password'
                name='password'
                value={state.password}
                onChange={handleChange}
              />
              <label className='sign-in-area__text-field-label'>Password</label>
            </div>
            <div className='sign-in-area__input-field'>
              <input
                className='sign-in-area__button'
                type='submit'
                value='Login'
              />
            </div>
          </form>
        </div>
        <div className='options-group'>
          <div className='reset-password-and-sign-up'>
            <button className='reset-password__button'>Reset Password</button>
            <button
              className='sign-up__button'
              onClick={() => {
                props.history.push('/signup')
              }}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
