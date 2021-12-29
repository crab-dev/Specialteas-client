import React from "react"

export default function Modal({ open, tea, onClose }) {
  if (!open) return null

  return (
    <div>
      <div className="overlay" />
      <div className="modal">
        <button onClick={onClose}>Close Modal</button>
        {tea}  
      </div>
    </div>
  )
}
