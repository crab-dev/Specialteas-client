import React from "react"
import cart from "../images/cart.png"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "animate.css"
import { formatter } from "../priceFormatter"
import { useNavigate } from "react-router-dom"

const cartModal = withReactContent(Swal)

export default function Cart({ items, clearCart }) {
  function calculatePrice(item) {
    let total = 0
    for (const topping of item.selectedToppings) {
      total += topping.price 
    }
    return total
  }

  let navigate = useNavigate()

  return (
    <div>
      <img className="cart-img" src={cart} alt="Cart" onClick={ async () => {
        console.log("items: ", items)
        const result = await cartModal.fire({
          title: "Cart",
          html: <div className="cart-content">
            {items.map((item, i) => {
              item.total = item.tea.price + calculatePrice(item)
              return (
                <div key={i}>
                  <h3>{item.tea.name} x{item.quantity}</h3>
                  {/* <p>x{item.quantity}</p> */}
                  <p>{item.size}</p>
                  <p>{item.ice}</p>
                  <p>{item.sugar}</p>
                  {item.selectedToppings.map((topping, i) => 
                  <p key={i}>{topping.label}</p>
                  )}
                  <h4 align="right">{formatter.format(item.total * item.quantity)}</h4>
                </div>
              )
            })}
            <h4 align="right">Total: {formatter.format(items.reduce((total, item) => total + (item.total * item.quantity), 0))}</h4>
          </div>,
          showCloseButton: true,
          showDenyButton: true,
          confirmButtonText: "Check out",
          denyButtonText: "Clear cart",
          reverseButtons: true,
          position: "top-right",
          width: "20rem",
          showClass: {
            popup: "animate__animated animate__fadeInRight"
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight"
          },
          confirmButtonColor: "#215763",
          denyButtonColor: "#98c1d9"
        })
        if (result.isConfirmed) {
          navigate("/checkout")
        } else if (result.isDenied) {
          clearCart()
        }
      }} />
    </div>
  )
}
