import React from "react"
import Modal from "./Modal"
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content"
import "animate.css"

const customTea = withReactContent(Swal)

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD", 
  minimumFractionDigits: 2
})

const Added = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 1500,
  width: "16rem",
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer)
    toast.addEventListener("mouseleave", Swal.resumeTimer)
  }
})

export default function TeaCard({ tea, addToCart }) {
  let item 
  clearSelection()

  function clearSelection() {
    item = { tea, selectedToppings: [] }
  }

  return (
    <div>
      <div className="card" onClick={ async () => {
        const result = await customTea.fire({
          html: <Modal tea={tea} item={item} />,
          showCloseButton: true,
          confirmButtonText: "Add to Cart",
          showClass: {
            popup: "animate__animated animate__fadeInUp"
          },
          confirmButtonColor: "#215763",
        }) 
        if (result.isConfirmed) {
          addToCart(item)
          Added.fire({
            icon: "success",
            title: "Added to cart!"
          })
        }
        clearSelection() 
      }}>
        <p>{tea.name}<br />{formatter.format(tea.price)}</p>
        <img src={tea.image} alt="tea" />
      </div>
    </div>
  )
}

