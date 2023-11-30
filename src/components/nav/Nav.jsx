import React from 'react'

import './Nav.css'
import logo from '../../images/FONIS - logo - beli.png'

export const Nav = () => {
  return (
    <nav>
        <div className="logo">
            <img src={logo} alt="FNOIS" className = "navImg" />
        </div>
        <ul className="nav-links">
            <li><a href="#aboutUs">O nama</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href="#comments">Utisci</a></li>
            <li><a href="#">Kontakt</a></li>
        </ul>
    </nav>
  )
}
