import React from "react"
import cart from "../images/cart.png"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "animate.css"

const cartModal = withReactContent(Swal)

export default function Cart({ items }) {
  return (
    <div>
      <img className="cart-img" src={cart} alt="Cart" onClick={() =>
        cartModal.fire({
          title: "Cart",
          html: <div>
            {items.map((item) => 
              <div key={item.id}>
                <h3>{item.name}</h3>
                <p>{item.size}</p>
                <p>{item.ice}</p>
                <p>{item.sugar}</p>
              </div>
            )}
          </div>,
          showCloseButton: true,
          confirmButtonText: "Check out",
          position: "top-right",
          heightAuto: false,
          showClass: {
            popup: "animate__animated animate__fadeInRight"
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutRight"
          },
      })} />
    </div>
  )
}
