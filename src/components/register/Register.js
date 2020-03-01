import React, { useState } from 'react'
import { GiBrain } from 'react-icons/gi'
import { MainContent, LoginBox} from '../signIn/SignIn'
import { LoginHeader, InnerLoginBox } from '../signIn/SignIn'
import { ButtonContainer, SubmitRow } from '../signIn/SignIn'
import { SubmitButton } from '../signIn/SignIn'
import { LoginBoxFooter, SignUp } from '../signIn/SignIn'
import { FormField } from '../common'
import { auth, firestore } from '../../firebase/firebase-utils'
import md5 from 'md5'

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
    <MainContent>
      <LoginBox>
        <GiBrain color='#67c744' size='10em' />
        <LoginHeader>Get an account.</LoginHeader>
        <InnerLoginBox>
          <FormField
            label='Name'
            placeholder='Full name'
            name='name'
            // value={state.email}
            // onChange={handleChange}
          />
          <FormField
            label='Email'
            placeholder='Email'
            name='email'
            // value={state.email}
            // onChange={handleChange}
          />
          <FormField
            label='Password'
            placeholder='Password'
            name='password'
            // value={state.password}
            // onChange={handleChange}
          />
          <ButtonContainer>
            <SubmitRow>
              <SubmitButton
                removeBottomMargin
                type='button'
                value='Continue'
                // onSubmit={handleSubmit}
              />
            </SubmitRow>
          </ButtonContainer>
        </InnerLoginBox>
        <LoginBoxFooter>
          Already have an account? <SignUp>Sign in</SignUp>
        </LoginBoxFooter>
      </LoginBox>
    </MainContent>
  )
}
