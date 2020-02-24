import React, { useState } from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaGoogle, FaEnvelope } from 'react-icons/fa'
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
  border-bottom: solid 1px #dedfe0;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: #29303b;
  display: block;
  font-size: 18px;
  padding: 24px 110px 24px 24px;
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

const Button = styled.a`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.43;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: 0 2px 2px 0 rgba(41, 48, 59, 0.24),
    0 0 2px 0 rgba(41, 48, 59, 0.12);
  color: #fff;
  border-radius: 2px;
  font-size: 19px;
  font-weight: 600;
  height: 48px;
  margin-bottom: 8px;
  padding: 0;
  background-color: #1a538a;
  ${props => props.google && `background-color: #fff; color: #29303b;`}
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

const LogoWrapper = styled.span`
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  box-sizing: border-box;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  vertical-align: -8%;
  display: inline-block;
  font-size: 20px;
  padding: 16px 0;
  text-align: center;
  width: 48px;
`

const FormField = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  margin-bottom: 8px;
  position: relative;
`

const Label = styled.label`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 15px;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  display: inline-block;
  max-width: 100%;
  font-weight: 400;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

const Input = styled.input`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  font: inherit;
  font-family: inherit;
  margin: 0;
  display: block;
  width: 100%;
  line-height: 1.43;
  background-color: #fff;
  border: 1px solid #8a92a3;
  box-shadow: none;
  transition: border-color ease-in-out 0.08s, box-shadow ease-in-out 0.08s;
  border-radius: 5px;
  color: #29303b;
  font-size: 18px;
  height: auto;
  padding: 11px 45px 12px 14px;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 16px 18px;
  background-position: 98% 50%;
  cursor: auto;
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
  font-size: 18px;
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
  color: #fff;
  background-color: #ec5252;
  border: 1px solid transparent;
  -webkit-appearance: button;
  cursor: pointer;
  font-size: 18px;
  font-weight: 600;
  height: 48px;
  margin-bottom: 16px;
  width: 100%;
`

const ForgotPassword = styled.a`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 18px;
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
  font-size: 18px;
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
  font-size: 18px;
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
        <LoginHeader>Log in to your SmartBrain account!</LoginHeader>
        <InnerLoginBox>
          <div>
            <Button>
              <LogoWrapper>
                <FaFacebookF />
              </LogoWrapper>
              Continue with Facebook
            </Button>
          </div>
          <div>
            <Button google>
              <LogoWrapper google>
                <FaGoogle color='#29303b' />
              </LogoWrapper>
              Continue with Google
            </Button>
          </div>
          <FormField>
            <Label>Email</Label>
            <div>
              <Input placeholder='Email' />
            </div>
          </FormField>
          <FormField>
            <Label>Email</Label>
            <div>
              <Input placeholder='Password' />
            </div>
          </FormField>
          <ButtonContainer>
            <SubmitRow>
              <SubmitButton type='button' value='Log in' />
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
