import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>MyApp</div>

      <nav className={styles.nav}>
        <a href="#" className={styles.link}>Home</a>
        <a href="#" className={styles.link}>About</a>
        <a href="#" className={styles.link}>Contact</a>
      </nav>
    </header>
  )
}

export default header
