import React from 'react'

import './Comments.css'
import sara from '../../images/sara.png'
import jovana from '../../images/jovana.png'
import misa from '../../images/misa.png'

import {Comment} from '../../models/comment/Comment.jsx'

const data = [
    {
        photo: sara,
        name: "Sara Slavković",
        nameAdd: "Član UO",
        text: "Kvalitet i dizajn duksa su me oduševili! Mnogo volim da ga nosim."
    },
    {
        photo: jovana,
        name: "Jovana Stojčić",
        nameAdd: "Član UO",
        text: "Majicu nosim često i štampa se nije isprala!"
    },
    {
        photo: misa,
        name: "Miloš Jolović",
        nameAdd: "Član UO",
        text: "Volim osećaj kada nosim brend u koji ja ulažem energiju i napor."
    }
];


export const Comments = () => {
  return (
    <div class="comments" id="comments">
        <h1>UTISCI</h1>
        <div class="commentsHolder">
            {data.map((comment) => {
                return <Comment comment={comment} />
            })}
        </div>
    </div>
  )
}
