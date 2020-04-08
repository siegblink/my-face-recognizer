import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import SignIn from './components/signIn/SignIn'

const Container = styled.div`
  text-align: center;
  min-height: 100vh;
  display: grid;
  grid-template-rows: 72px 1fr;
`

export default function App(props) {
  // Initialize email and password data -- for now this is not needed
  // const [credentials, setCredentials] = React.useState({
  //   email: '',
  //   password: '',
  // })

  // Setup credentials change handler -- for now this is not needed
  // function handleCredentialsChange(event) {
  //   const { name, value } = event.target
  //   setCredentials({ ...credentials, [name]: value })
  // }

  // Setup credentials submit handler -- for now this is not needed
  // async function handleCredentialsSubmit(event) {
  //   event.preventDefault()
  //   const { email, password } = credentials
  //   try {
  //     await auth.signInWithEmailAndPassword(email, password)
  //     setCredentials({ ...credentials, email: '', password: '' })
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // Destructure user and isSignedIn from props object
  const { user, isSignedIn } = props

  return (
    <Container>
      <Navigation user={user} isSignedIn={isSignedIn} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </Container>
  )
}
