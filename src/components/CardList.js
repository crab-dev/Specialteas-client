import React from "react"
import TeaCard from "./TeaCard"

export default function CardList({ teas, addToCart }) {
  return ( 
    <div className="card-grid">
      {teas.map(tea => {
        return <TeaCard tea={tea} key={tea.id} addToCart={addToCart} />
      })}
    </div>

  )
}

