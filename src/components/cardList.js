import React from "react"
import TeaCard from "./teaCard"

export default function CardList({ cards }) {
  return ( 
    <div className="card-grid">
      {cards.map(card => {
        return <TeaCard card={card} key={card.id} />
      })}
    </div>

  )
}
