import React, { useState } from 'react'
import Particles from 'react-particles-js'

import Navigation from './components/navigation/Navigation'
import Rank from './components/rank/Rank'
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm'
import FaceRecognition from './components/faceRecognition/FaceRecognition'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
import './App.css'

const particlesOptions = {
  particles: {
    number: {
      value: 120,
      density: {
        enable: true,
        value_area: 800,
      },
    },
  },
}

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: '',
  },
}

export default function App() {
  const [state, setState] = useState(initialState)

  function loadUser(data) {
    const { id, name, email, entries, joined } = data
    setState({
      ...state,
      user: { ...state.user, id, name, email, entries, joined },
    })
  }

  function calculateFaceLocation(data) {
    const clarifaiFace =
      data.outputs[0].data.regions[0].region_info.bounding_box
    const image = document.getElementById('inputImage')
    const width = Number(image.width)
    const height = Number(image.height)

    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    }
  }

  function displayFaceBox(box) {
    setState({ ...state, box })
  }

  function onInputChange(event) {
    setState({ ...state, input: event.target.value })
  }

  function onSubmit() {
    setState({ ...state, imageUrl: state.input })

    fetch('https://nameless-depths-48950.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: state.input }),
    })
      .then(response => response.json())
      .then(data => displayFaceBox(calculateFaceLocation(data)))
      .catch(err => console.log(err))
  }

  function onRouteChange(route) {
    if (route === 'signout') {
      setState(initialState)
    } else if (route === 'home') {
      setState({ ...state, isSignedIn: true })
    }
    setState({ ...state, route })
  }

  function setEntries(entry) {
    setState({ ...state, user: { ...state.user, entries: entry } })
  }

  const { isSignedIn, imageUrl, route, box } = state
  return (
    <div className='App'>
      <Particles className='particles' params={particlesOptions} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === 'home' ? (
        <div>
          <Rank name={state.user.name} entries={state.user.entries} />
          <ImageLinkForm
            onInputChange={onInputChange}
            onButtonSubmit={onSubmit}
            userId={state.user.id}
            setEntries={setEntries}
          />
          <FaceRecognition box={box} imageUrl={imageUrl} />
        </div>
      ) : route === 'signin' ? (
        <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  )
}
