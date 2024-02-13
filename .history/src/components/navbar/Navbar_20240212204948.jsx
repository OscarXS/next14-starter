import React from 'react'
import Links from './links/Links'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div>Logo</div>
        <div>
            <Links />
        </div>
    </nav>
  )
}

export default Navbar