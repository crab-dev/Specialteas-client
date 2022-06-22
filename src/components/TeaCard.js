import React from "react"
import Modal from "./Modal"
import { formatter } from "../priceFormatter"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "animate.css"

const customTea = withReactContent(Swal)

const Added = Swal.mixin({
  toast: true,
  position: "top-start",
  showConfirmButton: false,
  timer: 1500,
  width: "16rem",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer)
    toast.addEventListener("mouseleave", Swal.resumeTimer)
  }
})

export default function TeaCard({ tea, addToCart }) {
  return (
    <div>
      <div className="card" onClick={ async () => {
        let selected
        const result = await customTea.fire({
          html: <Modal tea={tea} onSelected={item => {selected = item }} />,
          showCloseButton: true,
          confirmButtonText: <b>Add to Cart</b>,
          // confirmButtonText: <b>Add to Cart | {formatter.format(tea.price)}</b>,
          showClass: {
            popup: "animate__animated animate__fadeInUp"
          },
          confirmButtonColor: "#215763",
        }) 
        if (result.isConfirmed) {
          addToCart(selected)
          Added.fire({
            icon: "success",
            title: "Added to cart!"
          })
        }
      }}>
        <p>{tea.name}<br />{formatter.format(tea.price)}</p>
        <img src={tea.image} alt="tea" />
      </div>
    </div>
  )
}
