import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import Particles from 'react-particles-js'
import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
import './App.css'

// const particlesOptions = {
//   particles: {
//     number: {
//       value: 120,
//       density: {
//         enable: true,
//         value_area: 800,
//       },
//     },
//   },
// }

export default function App(props) {
  return (
    <div className='App'>
      {/* <Particles className='particles' params={particlesOptions} /> */}
      <Navigation user={props.user} />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={Register} />
      </Switch>
    </div>
  )
}
