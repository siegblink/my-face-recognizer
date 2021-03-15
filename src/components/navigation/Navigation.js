import React from 'react';
import Logo from '../../components/logo/Logo';

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav className="nav">
        <Logo />
        <p onClick={() => onRouteChange('signout')} className="nav-text">
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav className="signin-nav-bar">
        <Logo />
        <div className="signin-nav-bar-wrapper">
          <p onClick={() => onRouteChange('signin')} className="nav-text signin-text">
            Sign In
          </p>
          <p onClick={() => onRouteChange('register')} className="nav-text register-text">
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;
