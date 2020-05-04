import React from 'react'
import styles from './Navigation.module.css'
import { GiBrain } from 'react-icons/gi'
import { Link, withRouter } from 'react-router-dom'
import { auth } from '../../firebase/firebase-utils'

function Navigation(props) {
  return (
    <nav className={styles.navbar}>
      <div>
        <GiBrain color='#67c744' />
        <span
          className={styles.logoText}
          onClick={() => props.history.push('/signin')}>
          SmartBrain
        </span>
      </div>
      {props.isSignedIn ? (
        <Link
          className={styles.buttonContainer}
          to='/signin'
          onClick={() => auth.signOut()}>
          <span className={styles.button}>Log out</span>
        </Link>
      ) : (
        <Link className={styles.buttonContainer} to='/signin'>
          <span className={styles.button}>Log in</span>
        </Link>
      )}
    </nav>
  )
}

export default withRouter(Navigation)
