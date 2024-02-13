import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import styles from './linkslinks/links.module.css'

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <div className={styles.logo}>Oscar Blog</div>
        <div>
            <Links />
        </div>
    </nav>
  )
}

export default Navbar