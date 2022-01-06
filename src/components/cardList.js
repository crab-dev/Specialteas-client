import React from "react"
import TeaCard from "./teaCard"

export default function CardList({ teas }) {
  return ( 
    <div className="card-grid">
      {teas.map(tea => {
        return <TeaCard tea={tea} key={tea.id} />
      })}
    </div>

  )
}

