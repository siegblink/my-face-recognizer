import React, { useState, useEffect, useCallback } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import { auth, firestore } from './firebase/firebase-utils'
import App from './App'
import './index.css'
import * as serviceWorker from './serviceWorker'

const Container = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400&display=swap');

  margin: 0;
  padding: 0;
  font-family: 'Roboto Condensed', sans-serif;
  color: #444;
  /* background: linear-gradient(89.94deg, #7491f8 0.03%, #8633f0 99.35%); */
  /* display: flex;
  flex-direction: 'column';
  flex: 1; */
`

function Root({ history }) {
  const [user, setUser] = useState({})
  const [isSignedIn, setIsSignedIn] = useState(false)

  const loadData = useCallback(
    async function(userAuth) {
      if (userAuth) {
        const userRef = firestore.collection('users').doc(`${userAuth.uid}`)
        userRef.onSnapshot(function(snapshot) {
          setUser({ id: snapshot.id, ...snapshot.data() })
        })
        setIsSignedIn(true)
        history.push('/')
      } else {
        setUser({})
        setIsSignedIn(false)
        history.push('/signin')
      }
    },
    [history]
  )

  useEffect(
    function() {
      const unsubscribeFromAuth = auth.onAuthStateChanged(loadData)
      return function() {
        if (unsubscribeFromAuth) unsubscribeFromAuth()
      }
    },
    [loadData]
  )

  console.log(user)
  return (
    <Container>
      <App user={user} isSignedIn={isSignedIn} />
    </Container>
  )
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
