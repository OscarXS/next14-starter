import React from 'react'
import Links from './links/Links'
import './Navbar.mo.css'

const Navbar = () => {
  return (
    <nav className='container'>
        <div>Logo</div>
        <div>
            <Links />
        </div>
    </nav>
  )
}

export default Navbar