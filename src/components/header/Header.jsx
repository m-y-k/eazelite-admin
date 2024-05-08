import React from 'react'
import './header.css'
import Logo from '../logo/Logo'
import SearchBar from '../searchBar/SearchBar'
import Navbar from '../navBar/Navbar'

function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
        {/* {logo} */}
        <Logo />
        {/* {search bar}  */}
        <SearchBar />
        {/* {nav} */}
        <Navbar />
    </header>
  )
}

export default Header