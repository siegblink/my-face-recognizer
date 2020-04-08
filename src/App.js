import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
import './App.css'

export default function App(props) {
  const { user, isSignedIn }  = props

  return (
    <div className='App'>
      <Navigation user={user} isSignedIn={isSignedIn} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={Register} />
      </Switch>
    </div>
  )
}
