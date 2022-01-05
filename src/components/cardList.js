import React from "react"
import TeaCard from "./teaCard"

export default function CardList({ grid }) {
  return ( 
    <div className="card-grid">
      {grid.map(card => {
        return <TeaCard card={card} key={card.id} />
      })}
    </div>

  )
}

