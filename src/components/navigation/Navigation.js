import React from 'react'
import Logo from '../../components/logo/Logo'
import './Navigation.css'

export default function Navigation({ onRouteChange, isSignedIn }) {
  return (
    <nav className='nav'>
      <Logo />
      <div className='nav-options__wrapper'>
        {isSignedIn ? (
          <button className='nav-options__button' onClick={() => onRouteChange('signout')}>
            Sign Out
          </button>
        ) : (
          <div>
            <button className='nav-options__button' onClick={() => onRouteChange('signin')}>
              Sign In
            </button>
            <button className='nav-options__button' onClick={() => onRouteChange('register')}>
              Register
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
