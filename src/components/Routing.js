import React from "react"
import { Routes, Route } from "react-router-dom"
import Checkout from "./Checkout"

export default function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/checkout" element={Checkout}>
        </Route>

        <Route path="/">
        </Route>
      </Routes>
    </div>
  )
} 
