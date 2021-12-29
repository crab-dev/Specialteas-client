import React from "react"

export default function Cart({ visible, cart }) {
  if (!visible) return null

  return (
    <div id="cart" className={visible ? "slideOut" : "slideIn"}>
      {cart}
    </div>
  )
}
