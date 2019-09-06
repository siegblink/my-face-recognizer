import React, { useState } from 'react'
import { auth, createUserProfileDocument } from '../../firebase/firebase-utils'
import './Register.css'

export default function Register(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    displayName: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  async function handleSubmit(event) {
    const { email, password } = state
    event.preventDefault()
    try {
      const { user } = auth.createUserWithEmailAndPassword(email, password)
      await createUserProfileDocument(user, { displayName: state.displayName })
      setState({ ...state, email: '', password: '', displayName: '' })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <main className='main-area'>
      <div className='signup-area'>
        <div className='signup-area__form-container'>
          <h1 className='signup-area__header'>SmartBrain</h1>
          <div className='signup-area__title'>
            <h2 className='signup-area__text'>Sign Up</h2>
          </div>
          <form id='form' onSubmit={handleSubmit}>
            <div className='signup-area__input-field'>
              <input
                className={`signup-area__text-field ${state.displayName ? 'has-value' : ''}`}
                type='text'
                name='displayName'
                value={state.displayName}
                onChange={handleChange}
              />
              <label className='signup-area__text-field-label'>Name</label>
            </div>
            <div className='signup-area__input-field'>
              <input
                className={`signup-area__text-field ${state.email ? 'has-value' : ''}`}
                type='email'
                name='email'
                value={state.email}
                onChange={handleChange}
              />
              <label className='signup-area__text-field-label'>Email</label>
            </div>
            <div className='signup-area__input-field'>
              <input
                className={`signup-area__text-field ${state.password ? 'has-value' : ''}`}
                type='password'
                name='password'
                value={state.password}
                onChange={handleChange}
              />
              <label className='signup-area__text-field-label'>Password</label>
            </div>
            <div className='signup-area__input-field'>
              <input className='signup-area__button' type='submit' value='Sign up' />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
