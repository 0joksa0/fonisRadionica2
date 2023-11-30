import React from 'react'

import './Hero.css'
import heroLogo from '../../images/LOGO.png'

export const Hero = () => {
  return (
    <div className="hero">
        <div className="heroEl">
            <img src = {heroLogo} alt="FONIS SHOP" />
            <button onClick="location.href = './form.html'">Trenutno dostupno</button>
        </div>
    </div>
  )
}
