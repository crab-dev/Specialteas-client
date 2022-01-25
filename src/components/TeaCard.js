import React, { useState } from "react"
import Modal from "./Modal"
import { sizeOptions, iceOptions, sugarOptions } from "../itemOptions"
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
  const [item, setItem] = useState({ tea, size: sizeOptions[0], ice: iceOptions[0], sugar: sugarOptions[0], selectedToppings: [] })

  function clearSelection() {
    setItem({tea, size: sizeOptions[0], ice: iceOptions[0], sugar: sugarOptions[0], selectedToppings: []})
  }

  return (
    <div>
      <div className="card" onClick={ async () => {
        const result = await customTea.fire({
          html: <Modal tea={tea} item={item} setItem={setItem} />,
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

