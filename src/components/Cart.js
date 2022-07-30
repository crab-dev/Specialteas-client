import React from "react"
import ReactDom from "react-dom"
import "animate.css"
import { formatter } from "../priceFormatter"

export default function Cart({ items, clearCart, removeItem, addToCart, tea }) {
  function calculatePrice(item) {
    let total = 0
    for (const topping of item.selectedToppings) {
      total += topping.price 
    }
    return total
  }

  return ReactDom.createPortal(
    <div>
      <div className="cart-content">
        {items.map((item, i) => {
          item.total = item.tea.price + calculatePrice(item)
          return (
            <div key={i}>
              <h3>{item.tea.name} x{item.quantity}</h3>
              <p>{item.size}</p>
              <p>{item.ice}</p>
              <p>{item.sugar}</p>
              {item.selectedToppings.map((topping, i) => 
              <p key={i}>{topping.label}</p>
              )}
              <span className="edit">Edit</span><span className="remove" onClick={() => removeItem(i)}>Remove</span>
              <h4 align="right">{formatter.format(item.total * item.quantity)}</h4>
            </div>
          )
        })}
        <h4 align="right">Total: {formatter.format(items.reduce((total, item) => total + (item.total * item.quantity), 0))}</h4>
      </div>
    </div>,
    document.getElementById("cart-portal")
  )
}
