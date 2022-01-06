import React from "react"
import Modal from "./Modal"
import tea1 from "../images/tea1.jpg"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "animate.css"

const customTea = withReactContent(Swal)

export default function TeaCard({ tea, addToCart }) {
  return (
    <div>
      <div className="card" onClick={ async () => {
        const result = await customTea.fire({
          html: <Modal tea={tea} />,
          showCloseButton: true,
          confirmButtonText: "Add to Cart",
          showClass: {
            popup: "animate__animated animate__fadeInUp"
          }
        }) 
        if (result.isConfirmed) {
          addToCart(tea)
        }
      }}>
        <p>{tea.name}</p>
        <img src={tea1} />
      </div>
    </div>
  )
}

