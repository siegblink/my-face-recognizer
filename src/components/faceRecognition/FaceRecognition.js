import React from 'react'
import './FaceRecognition.css'

export default function FaceRecognition({ imageUrl, box }) {
  const style = {
    width: '100%',
    height: '100%',
    backgroundImage: `url('https://images.unsplash.com/photo-1506634572416-48cdfe530110?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'contain',
  }

  return (
    <div className='image-area'>
      <div style={style}></div>
      <div
        className='bounding-box'
        // style={{
        //   top: box.topRow,
        //   right: box.rightCol,
        //   bottom: box.bottomRow,
        //   left: box.leftCol,
        // }}
      />
    </div>
  )
}
