import React from 'react'
import FaceRecognition from '../faceRecognition/FaceRecognition'
import ImageLinkForm from '../imageLinkForm/ImageLinkForm'
import './Rank.css'

export default function Rank({ name, entries }) {
  return (
    <section className='header'>
      <h1 className='header__welcome-text'>Welcome back, Siegfred</h1>
      <div className='sub-header'>
        <h3 className='header__secondary-text'>Detect faces in your pictures. Copy and paste the URL of an image in the box below.</h3>
        <h3 className='header__secondary-text'>Your entry count is 0</h3>
      </div>
      <ImageLinkForm />
      <FaceRecognition />
    </section>
  )
}
