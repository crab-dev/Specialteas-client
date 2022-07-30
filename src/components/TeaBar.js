import React, { useState } from "react"
import Cart from "./Cart"
import cart from "../images/cart.png"

export default function TeaBar({ items, clearCart, removeItem, addToCart, tea }) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="tea-bar">
      <a href="#special-teas">Special Teas</a>
      <a href="#milk-teas">Milk Teas</a>
      <a href="#slushies">Slushies</a>
      <a href="#fruit-teas">Fruit Teas</a>
      <img className="cart-img" src={cart} alt="Cart" onClick={() => setIsCartOpen(true)} />
      <div>
        { isCartOpen && <Cart items={items} clearCart={clearCart} removeItem={removeItem} addToCart={addToCart} tea={tea}/> }
      </div>
    </div>
  )
}
