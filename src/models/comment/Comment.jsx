import React from 'react'

export const Comment = ({comment}) => {
  return (
    <div class="comment">
                <p>{comment.text}</p>
                <div>
                    <img src={comment.photo} alt="UTISCI"/>
                    <h4>{comment.name} <br/> {comment.nameAdd}</h4>
                </div>
            </div>
  )
}
