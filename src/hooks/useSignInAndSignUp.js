import { useState } from 'react'

export default function useSignInAndSignUp() {
  const [state, setState] = useState({
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
  })

  function handleChange(event) {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  function handleImageSubmit(event) {
    event.preventDefault()
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

  function handleSignIn(event) {
    event.preventDefault()
    fetch('https://nameless-depths-48950.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: state.signInEmail,
        password: state.signInPassword,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user)
          onRouteChange('home')
        }
      })
  }

  function handleSignUp(event) {
    const { email, password, name } = state
    event.preventDefault()
    fetch('https://nameless-depths-48950.herokuapp.com/register', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        name,
      }),
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          loadUser(user)
          onRouteChange('home')
        }
      })
  }

  function setEntries(entry) {
    setState({ ...state, user: { ...state.user, entries: entry } })
  }

  function loadUser(data) {
    const { id, name, email, entries, joined } = data
    setState({
      ...state,
      user: { ...state.user, id, name, email, entries, joined },
    })
  }

  function onRouteChange(route) {
    if (route === 'signout') {
      setState(initialState)
    } else if (route === 'home') {
      setState({ ...state, isSignedIn: true })
    }
    setState({ ...state, route })
  }

  function calculateFaceLocation(data) {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
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
}
