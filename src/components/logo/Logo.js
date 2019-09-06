import React from 'react'
import brain from './brain.png'
import './Logo.css'

export default function Logo() {
  return (
    <div className='logo-container'>
      <img className='logo' src={brain} alt='logo' />
      <div className='logo__text-wrapper'>
        <div className='logo__text'>Smart</div>
        <div className='logo__text'>Brain</div>
      </div>
    </div>
  )
}
