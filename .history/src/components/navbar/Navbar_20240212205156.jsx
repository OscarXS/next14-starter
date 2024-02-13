import React from 'react'
import Links from './links/Links'
import './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={StyleSheet.container}>
        <div>Logo</div>
        <div>
            <Links />
        </div>
    </nav>
  )
}

export default Navbar