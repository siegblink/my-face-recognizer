import React from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'
import Logo from '../../components/logo/Logo'
import './Navigation.css'

export default function Navigation(props) {
  return (
    <nav className='nav'>
      <Logo />
      <div className='nav-options__wrapper'>
        {props.isSignedIn ? (
          <button className='nav-options__button' onClick={() => auth.signOut()}>
            Sign Out
          </button>
        ) : (
          <div>
            <Link to='/signin' className='nav-options__button'>
              Sign In
            </Link>
            <Link to='/signup' className='nav-options__button'>
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
