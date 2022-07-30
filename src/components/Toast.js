import React from "react"

export default function Toast ({ onClose }) {
  return (
    <div className="toast">
      <button onClick={onClose}>x</button>
      <div className="toast-img">
        <img src="" alt="" />
      </div>
      <div>
        <p className="toast-title">Added to cart!</p>
      </div>
    </div>
  )
}
