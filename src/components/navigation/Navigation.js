import React from 'react'
import styled from 'styled-components'
import { GiBrain } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'

const Nav = styled.nav`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #3c3b37;
  box-sizing: border-box;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
  height: 4.5rem;
  padding: 0 1.6rem;
  position: relative;
  align-items: center;
  display: flex;
  font-weight: 700;
  line-height: 1.4;
  font-size: 1.4rem;
  justify-content: space-between;
`

const ButtonWrapper = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  color: #3c3b37;
  font-weight: 400;
  line-height: 1.4;
  font-size: 1.4rem;
  box-sizing: border-box;
  padding-left: 0.8rem;
  text-decoration: none;
`

const Button = styled.a`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  text-decoration: none;
  position: relative;
  align-items: center;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  min-width: 10rem;
  padding: 0 1.6rem;
  justify-content: center;
  user-select: none;
  vertical-align: bottom;
  color: #0f7c90;
  background-color: transparent;
  ${props => props.signup && `background-color: #0f7c90; color: #d0eaef;`}
  border: 1px solid #dcdacb;
  height: 3rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  font-size: 1rem;
  font-family: inherit;
`

export default function Navigation(props) {
  return (
    <Nav>
      <div>
        <GiBrain /> SmartBrain
      </div>
      {props.isSignedIn ? (
        <ButtonWrapper as={Link} onClick={() => auth.signOut()}>
          <Button>Log out</Button>
        </ButtonWrapper>
      ) : (
        <div>
          <ButtonWrapper as={Link} to='/signin'>
            <Button>Log in</Button>
          </ButtonWrapper>
          <ButtonWrapper as={Link} to='/signup'>
            <Button signup>Sign up</Button>
          </ButtonWrapper>
        </div>
      )}
    </Nav>
  )
}
