import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
// import Particles from 'react-particles-js'

import Navigation from './components/navigation/Navigation'
import Home from './components/home/Home'
import SignIn from './components/signIn/SignIn'
import Register from './components/register/Register'
import { auth, createUserProfileDocument } from './firebase/firebase-utils'
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

export default function App() {
  const [user, setUser] = useState({})
  useEffect(function() {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async function (userAuth) {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(function (snapshot) {
          console.log(snapshot.data())
          setUser({ id: snapshot.id, ...snapshot.data() })
        })
      } else {
        setUser(userAuth)
      }
    })
    return function() {
      unsubscribeFromAuth()
    }
  }, [])

  console.log(user)
  return (
    <div className='App'>
      {/* <Particles className='particles' params={particlesOptions} /> */}
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/signup' component={Register} />
      </Switch>
    </div>
  )
}
