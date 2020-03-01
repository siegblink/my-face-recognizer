import React, { useState } from 'react'
import styled from 'styled-components'
import { GiBrain } from 'react-icons/gi'
// import { Button } from '../common'
// import { FaFacebookF, FaGoogle } from 'react-icons/fa'
import { FormField } from '../common'
import { auth } from '../../firebase/firebase-utils'

const MainContent = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 15px;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  flex: 1 0 auto;
`

const LoginBox = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 15px;
  line-height: 1.43;
  box-sizing: border-box;
  margin: 24px auto;
  max-width: 100%;
  border-radius: 6px;
  color: #29303b;
  width: 380px;
`

const LoginHeader = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.43;
  box-sizing: border-box;
  /* border-bottom: solid 1px #dedfe0; */
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: #29303b;
  display: block;
  font-size: 30px;
  padding: 24px 24px 0px 24px;
  text-align: initial;
`

const InnerLoginBox = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  padding: 24px 24px 16px;
`

const ButtonContainer = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 18px;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  margin: 0 0 16px;
`

const SubmitRow = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  text-align: center;
`

const SubmitButton = styled.input`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  font: inherit;
  font-family: inherit;
  margin: 0;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  touch-action: manipulation;
  background-image: none;
  white-space: nowrap;
  padding: 11px 12px;
  line-height: 1.35135;
  border-radius: 2px;
  user-select: none;
  color: #bff5ab;
  background-color: #2a820a;
  border: 1px solid transparent;
  -webkit-appearance: button;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  margin-bottom: 30px;
  width: 100%;
`

const ForgotPassword = styled.a`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
  line-height: 1.43;
  text-align: center;
  box-sizing: border-box;
  color: #007791;
  background-color: transparent;
  font-weight: 400;
  text-decoration: none;
  cursor: pointer;
`

const LoginBoxFooter = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  display: flex;
  padding: 0 0 24px;
  justify-content: center;
`

const SignUp = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 16px;
  line-height: 1.43;
  text-align: center;
  box-sizing: border-box;
  color: #007791;
  background-color: transparent;
  text-decoration: none;
  font-weight: 400;
  padding-left: 5px;
  cursor: pointer;
`

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
    <MainContent>
      <LoginBox>
        <GiBrain color='#67c744' size='10em' />
        <LoginHeader>Log in to SmartBrain</LoginHeader>
        <InnerLoginBox>
          {/* <Button text='Continue with Facebook'>
            <FaFacebookF color='#b3d9fc' />
          </Button>
          <Button google text='Continue with Google'>
            <FaGoogle color='#29303b' />
          </Button> */}
          {/* <div>
            <GiBrain color='#67c744' />
          </div> */}
          <FormField
            label='Email'
            placeholder='Email'
            name='email'
            value={state.email}
            onChange={handleChange}
          />
          <FormField
            label='Password'
            placeholder='Password'
            name='password'
            value={state.password}
            onChange={handleChange}
          />
          <ButtonContainer>
            <SubmitRow>
              <SubmitButton
                type='button'
                value='Log in'
                onSubmit={handleSubmit}
              />
              <span>or</span> <ForgotPassword>Forgot password</ForgotPassword>
            </SubmitRow>
          </ButtonContainer>
        </InnerLoginBox>
        <LoginBoxFooter>
          Don't have an account? <SignUp>Sign up</SignUp>
        </LoginBoxFooter>
      </LoginBox>
    </MainContent>
  )
}
