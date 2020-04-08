import React from 'react'
import firebase from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { Route } from 'react-router-dom'

export default function SignIn(props) {
  const [loading, setLoading] = React.useState(true)

  const uiConfig = {
    signInOptions: [firebase.auth.EmailAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccessWithAuthResult: function (authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true
      },
      uiShown: function () {
        // The widget is rendered.
        // Hide the loader.
        setLoading(false)
      },
    },
    signInSuccessUrl: '/home',
  }

  return (
    <Route path='/signin'>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      {loading && <div id='loading'>Loading...</div>}
    </Route>
  )
}
