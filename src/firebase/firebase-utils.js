import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebase-config'

const firebaseui = require('firebaseui')

// Initialize firebase
firebase.initializeApp(firebaseConfig)

// Initialize Firebase authentication
export const auth = firebase.auth()
// Initialize Firebase UI
export const ui = new firebaseui.auth.AuthUI(firebase.auth())

// Initialize database with Firebase Firestore
export const firestore = firebase.firestore()

// Initialize Google authentication
const provider = new firebase.auth.GoogleAuthProvider()
// Initialize configuration for the Google authentication
provider.setCustomParameters({ prompt: 'select_account' })

export function signInWithGoogle() {
  auth.signInWithPopup(provider)
}

// Declare a function that can create a user profile
// export async function createUserProfileDocument(userAuth, additionalData) {
//   if (!userAuth) return
//   const userRef = firestore.doc(`users/${userAuth.uid}`)
//   const snapshot = await userRef.get()
//   if (!snapshot.exists) {
//     const { displayName, email } = userAuth
//     const createdAt = new Date()
//     try {
//       await userRef.set({ displayName, email, createdAt, ...additionalData })
//     } catch (error) {
//       console.error('error creating user', error)
//     }
//   }
//   return userRef
// }

export default firebase
