import React from 'react'

import "./Card.css"

const Card = ({type, picked = false, onClick}) => {
  return (
    <div onClick={onClick} className={picked ? "card picked" : "card"}>
        <div className="top-left">{type.suit}</div>
        <div className="suit">{type.suit}</div>
        <div className="value">{type.value}</div>
        <div className="bottom-right">{type.suit}</div>
    </div>
  )
}

export default Card