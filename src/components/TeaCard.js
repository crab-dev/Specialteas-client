import React, { useState } from "react"
import Modal from "./Modal"
import { formatter } from "../priceFormatter"
import { sizeOptions, iceOptions, sugarOptions } from "../itemOptions"

export default function TeaCard({ tea, addToCart }) {
  const [item, setItem] = useState({ tea, quantity: 1, size: sizeOptions[0], ice: iceOptions[0], sugar: sugarOptions[0], selectedToppings: [] })
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <div className="card" onClick={() => setIsOpen(true)}>
        <p>{tea.name}<br />{formatter.format(tea.price)}</p>
        <img src={tea.image} alt="tea" />
      </div>
      <div>
        { isOpen && <Modal className="modal" open={isOpen} onClose={() => setIsOpen(false)} tea={tea} item={item} setItem={setItem} /> }
      </div>
    </div>
  )
}
