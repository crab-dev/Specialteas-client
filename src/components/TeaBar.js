import React from "react"
import Cart from "./Cart"

export default function TeaBar({ items, clearCart, removeItem }) {
  return (
    <div className="tea-bar">
      <a href="#special-teas">Special Teas</a>
      <a href="#milk-teas">Milk Teas</a>
      <a href="#slushies">Slushies</a>
      <a href="#fruit-teas">Fruit Teas</a>
      <Cart items={items} clearCart={clearCart} removeItem={removeItem}/>
    </div>
  )
}
