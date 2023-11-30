import React from 'react'

import './About.css'
import aboutImg from '../../images/oNamaSlika.png'

export const About = () => {
  return (
    <div className="aboutUs" id="aboutUs">   
        <h1>O NAMA</h1>
        <p>Udruženje studenata informatike FONIS predstavlja ujedinjujuću tačku i mesto za stvaranje novih i širenje postojećih znanja iz oblasti informacionih tehnologija između mladih i entuzijastičnih studenata sa Fakulteta organizacionih nauka.</p>
        <button>Saznajte jos</button>
        <div className="aboutUsImgHolder">
            <img src={aboutImg} alt="FONIS SHOP" />
        </div>
    </div>
  )
}
