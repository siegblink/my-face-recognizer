import React from 'react'
import styles from './Home.module.css'

export default function Home(props) {
  return (
    <div className={styles.home}>
      <section className={styles.sidebar}>
        <ul>
          <li>
            <a href='/home'>Home</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='/profile'>Siegfred Balona</a>
          </li>
          <li>
            <a href='/logout'>Logout</a>
          </li>
        </ul>
      </section>
      <section className={styles.main}>
        <div>
          <div className={styles.textField}>
            <label htmlFor='url'>Enter image URL</label>
            <input type='text' id='url' />
          </div>
        </div>
        <div>
          
        </div>
      </section>
    </div>
  )
}
