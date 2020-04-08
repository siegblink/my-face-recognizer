import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase/app'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Container = styled.div`
  padding-top: 200px;
`

export default function SignIn() {
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
    <Container>
      {loading && (
        <div id='loading'>
          <Loader type='Bars' color='#67c744' height={80} width={80} />
        </div>
      )}
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
    </Container>
  )
}
