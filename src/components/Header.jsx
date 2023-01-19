import React from 'react'
import logo from "../assets/logo1.PNG"
const Header = () => {
  return (
 <header>
    <nav>
        <img className='logo' src={logo} alt="logo" />
    </nav>
 </header>
  )
}

export default Header