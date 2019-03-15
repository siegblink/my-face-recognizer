import React from 'react';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="img-wrapper">
      <img className="logo-img" src={brain} alt="logo" />
      <div className="logo-text-wrapper">
        <div className="logo-text">Smart</div>
        <div className="logo-text">Brain</div>
      </div>
    </div>
  );
};

export default Logo;
