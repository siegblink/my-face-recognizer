import React from 'react'
import styled from 'styled-components'
import { GiBrain } from 'react-icons/gi'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'

const Nav = styled.nav`
  height: 4.5rem;
  padding: 0 1.6rem;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4;
  box-sizing: border-box;
  color: #3c3b37;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
`

const LogoText = styled.span`
  color: #2a820a;
  cursor: pointer;
`

const ButtonWrapper = styled.div`
  padding-left: 0.8rem;
  color: #3c3b37;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.4;
  box-sizing: border-box;
  text-decoration: none;
`

const Button = styled.span`
  min-width: 10rem;
  height: 3rem;
  padding: 0 1.6rem;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.02rem;
  text-decoration: none;
  color: #0f7c90;
  background-color: transparent;
  box-sizing: border-box;
  vertical-align: bottom;
  border: 1px solid #dcdacb;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ${props => props.signup && `background-color: #0f7c90; color: #d0eaef;`}
`

function Navigation(props) {
  return (
    <Nav>
      <div>
        <GiBrain color='#67c744' />{' '}
        <LogoText onClick={() => props.history.push('/signin')}>
          SmartBrain
        </LogoText>
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
          {/* <ButtonWrapper as={Link} to='/signup'>
            <Button signup>Sign up</Button>
          </ButtonWrapper> */}
        </div>
      )}
    </Nav>
  )
}

export default withRouter(Navigation)
