import React from 'react'

import './Hero.css'
import heroLogo from '../../images/LOGO.png'

export const Hero = () => {

  function handleClick() {
    window.location.href = './#/form'
  }

  return (
    <div className="hero">
        <div className="heroEl">
            <img src = {heroLogo} alt="FONIS SHOP" />
            <button onClick={handleClick}>Trenutno dostupno</button>
        </div>
    </div>
  )
}
