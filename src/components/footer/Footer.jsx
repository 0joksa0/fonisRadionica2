import React from 'react'

import './Footer.css'

import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import fonis from '../../images/FONIS - logo - beli.png'

export const Footer = () => {
  return (
    <footer>
        <div class="icons">
            <a href="https://www.facebook.com/"><img src={facebook} alt="FACEBOOK"/></a>
            <a href="https://www.instagram.com/"><img src={instagram} alt="INSTAGRAM"/></a>
        </div>
        <img src={fonis} alt="FONIS"/>
    </footer>
  )
}
