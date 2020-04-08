import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
import { auth } from './firebase/firebase-utils'

const Container = styled.div`
  text-align: center;
`

export default function App(props) {
  const { user, isSignedIn } = props
  const [credentials, setCredentials] = React.useState({
    email: '',
    password: '',
  })

  function handleCredentialsChange(event) {
    const { name, value } = event.target
    setCredentials({ ...credentials, [name]: value })
  }

  async function handleCredentialsSubmit(event) {
    event.preventDefault()
    const { email, password } = credentials
    try {
      await auth.signInWithEmailAndPassword(email, password)
      setCredentials({ ...credentials, email: '', password: '' })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <Navigation user={user} isSignedIn={isSignedIn} />
      <Switch>
        <Route exact path='/' component={Home} />
        <SignIn
          credentials={credentials}
          handleCredentialsChange={handleCredentialsChange}
          handleCredentialsSubmit={handleCredentialsSubmit}
        />
        <Route exact path='/signup' component={Register} />
      </Switch>
    </Container>
  )
}
