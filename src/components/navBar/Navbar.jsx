import React from 'react'
import './navbar.css'
import NavNotice from './NavNotice'
import NavMessage from './NavMessage'
import NavAvatar from './NavAvatar'

function Navbar() {
  return (
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
            <NavNotice />
            <NavMessage />
            <NavAvatar />
        </ul>
    </nav>
  )
}

export default Navbar