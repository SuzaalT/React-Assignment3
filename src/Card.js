import React from 'react'

import "./Card.css"

const Card = ({suit, value, picked = false, onClick}) => {
  return (
    <div onClick={onClick} className={picked ? "card picked" : "card"}>
        <div className="top-left">{suit}</div>
        <div className="suit">{suit}</div>
        <div className="value">{value}</div>
        <div className="bottom-right">{suit}</div>
    </div>
  )
}

export default Card