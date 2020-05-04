import React from 'react'
import styles from './Home.module.css'
// import Rank from '../rank/Rank'
// import FaceRecognition from '../faceRecognition/FaceRecognition'
// import ImageLinkForm from '../imageLinkForm/ImageLinkForm'

export default function Home(props) {
  return (
    <div className={styles.home}>
      <section className={styles.sidebar}>
        <ul>
          <li>
            <a href='/home'>Home</a>
          </li>
          <li>
            <a href='/profile'>Profile</a>
          </li>
          <li>
            <a href='/logout'>Logout</a>
          </li>
        </ul>
      </section>
      <section className={styles.main}>Main area</section>
    </div>
  )
}
