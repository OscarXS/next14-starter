import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <Link className={styles.logo}>Oscar Blog</Link>
        <div>
            <Links />
        </div>
    </nav>
  )
}

export default Navbar