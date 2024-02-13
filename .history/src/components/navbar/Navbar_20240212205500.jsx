import React from 'react'
import Links from './links/Links'
import navbar from './navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.container}>
        <div>Logo</div>
        <div>
            <Links />
        </div>
    </nav>
  )
}

export default Navbar