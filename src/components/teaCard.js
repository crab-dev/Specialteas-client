import React, { useState } from "react"
import Modal from "./Modal"
import tea1 from "../images/tea1.jpg"

export default function TeaCard({ card }) {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div>
      <div className="card" onClick={() => setIsOpen(true)}>
        <p>{card.tea}</p>
        <img src={tea1} />
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} content={"boop"} />
    </div>
  )
}
