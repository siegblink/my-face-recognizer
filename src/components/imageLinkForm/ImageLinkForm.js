import React from 'react'
import './ImageLinkForm.css'

export default function ImageLinkForm({ onInputChange, onButtonSubmit, userId, setEntries }) {
  // function onImageSubmit() {
  //   fetch('https://nameless-depths-48950.herokuapp.com/image', {
  //     method: 'put',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ id: userId }),
  //   })
  //     .then(response => response.json())
  //     .then(entry => {
  //       if (entry) {
  //         setEntries(entry)
  //         onButtonSubmit()
  //       }
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <form className='header__form'>
      <input className='header__text-field' type='text' />
      <input className='header__submit-button' type='submit' value='Detect' />
    </form>
  )
}
