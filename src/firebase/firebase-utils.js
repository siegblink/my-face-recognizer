import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import firebaseConfig from './firebase-config'

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
export const firestore = firebase.firestore()
const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export function signInWithGoogle() {
  auth.signInWithPopup(provider)
}

export async function createUserProfileDocument(userAuth, additionalData) {
  if (!userAuth) return
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()
  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData })
    } catch (error) {
      console.error('error creating user', error)
    }
  }
  return userRef
}

export default firebase
