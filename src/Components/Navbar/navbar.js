import React from 'react'
import './navbar.css'
import NavbarBelt from './NavbarBelt/NavbarBelt.js'
import NavbarBannner from './NavbarBanner/NavbarBannner.js'

const Navbar = () => {
  return (
    <div className='navbar'>
        <NavbarBelt/>
        <NavbarBannner/>
    </div>
  )
}

export default Navbar