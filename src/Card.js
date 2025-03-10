import React from 'react'

import "./Card.css"

const Card = ({type}) => {
  return (
    <div class="card">
        <div class="top-left">{type.suit}</div>
        <div class="suit">{type.suit}</div>
        <div class="value">{type.value}</div>
        <div class="bottom-right">{type.suit}</div>
    </div>
  )
}

export default Card