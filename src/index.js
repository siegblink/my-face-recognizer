import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { auth, firestore } from './firebase/firebase-utils'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'

function Root(props) {
  const [user, setUser] = useState({})
  const [isSignedIn, setIsSignedIn] = useState(false)
  useEffect(function() {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async function(userAuth) {
      if (userAuth) {
        const userRef = firestore.collection('users').doc(`${userAuth.uid}`)
        userRef.onSnapshot(function(snapshot) {
          setUser({ id: snapshot.id, ...snapshot.data() })
        })
        setIsSignedIn(true)
        props.history.push('/')
      } else {
        setUser({})
        setIsSignedIn(false)
        props.history.push('/signin')
      }
    })
    return function () {
      unsubscribeFromAuth()
    }
  }, [])
  
  return <App user={user} isSignedIn={isSignedIn} />
}

const RootWithAuth = withRouter(Root)
ReactDOM.render(
  <Router>
    <RootWithAuth />
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
