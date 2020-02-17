import React, { useState } from 'react'
import { auth, firestore } from '../../firebase/firebase-utils'
import md5 from 'md5'
import './Register.css'

export default function Register(props) {
  const [state, setState] = useState({
    email: '',
    password: '',
    name: '',
  })

  function handleChange(event) {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  async function handleSubmit(event) {
    const { email, password, name } = state
    event.preventDefault()

    try {
      const createdUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      )
      createdUser.user.updateProfile({
        displayName: name,
        photoURL: `http://gravatar.com/gravatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
      })

      const userRef = firestore
        .collection('users')
        .doc(`${createdUser.user.uid}`)
      const snapshot = await userRef.get()

      if (!snapshot.exists) {
        const { email, displayName, photoURL } = createdUser.user
        const dateCreated = new Date()
        try {
          await userRef.set({ displayName, email, dateCreated, photoURL })
        } catch (error) {
          console.error(error)
        }
      }

      setState({ ...state, email: '', password: '', name: '' })
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
                className={`signup-area__text-field ${
                  state.name ? 'has-value' : ''
                }`}
                type='text'
                name='name'
                value={state.name}
                onChange={handleChange}
              />
              <label className='signup-area__text-field-label'>Name</label>
            </div>
            <div className='signup-area__input-field'>
              <input
                className={`signup-area__text-field ${
                  state.email ? 'has-value' : ''
                }`}
                type='email'
                name='email'
                value={state.email}
                onChange={handleChange}
              />
              <label className='signup-area__text-field-label'>Email</label>
            </div>
            <div className='signup-area__input-field'>
              <input
                className={`signup-area__text-field ${
                  state.password ? 'has-value' : ''
                }`}
                type='password'
                name='password'
                value={state.password}
                onChange={handleChange}
              />
              <label className='signup-area__text-field-label'>Password</label>
            </div>
            <div className='signup-area__input-field'>
              <input
                className='signup-area__button'
                type='submit'
                value='Sign up'
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
