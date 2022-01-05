import React, { useState } from "react"
import cart from "../images/cart.png"
import Cart from "./Cart"

export default function TeaBar() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="tea-bar">
      <a href="#special-teas">Special Teas</a>
      <a href="#milk-teas">Milk Teas</a>
      <a href="#slushies">Slushies</a>
      <a href="#fruit-teas">Fruit Teas</a>
      <img className="cart-img" onClick={() => setIsVisible(!isVisible)} src={cart} />
      <Cart visible={isVisible} cart={"Cart things"} />
    </div>
  )
}
