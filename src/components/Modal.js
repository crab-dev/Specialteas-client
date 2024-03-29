import React from "react"
import ReactDom from "react-dom"
import { toppings } from "../toppings"
import { formatter } from "../priceFormatter"
import { sizeOptions, iceOptions, sugarOptions } from "../itemOptions"

export default function Modal({ tea, item, setItem, onClose, onAdd, addToCart, setIsAdded, setDefaultOptions }) {
  const addItem = () => {
    addToCart(item)
    onClose()
    onAdd()
    setDefaultOptions()

    setTimeout(() => {
      setIsAdded(false)
    }, 1200)
  }

  const incQuantity = () => setItem(prevItem => {
    return {...prevItem, quantity: item.quantity + 1}
  })  

  const decQuantity = () => setItem(prevItem => {
    if (item.quantity <= 1) {
      return {...prevItem, quantity: item.quantity} 
    } else {
      return {...prevItem, quantity: item.quantity - 1}
    }
  }) 

  const handleSizeChange = (event) => {
    setItem(prevItem => {
      return {...prevItem, size: event.target.value}
    })
  }

  const handleIceChange = (event) => {
    setItem(prevItem => {
      return {...prevItem, ice: event.target.value}
    })
  }

  const handleSugarChange = (event) => {
    setItem(prevItem => {
      return {...prevItem, sugar: event.target.value}
    })
  }

  const handleToppingsChange = (topping) => {
    if (item.selectedToppings.includes(topping)) {
      setItem(prevItem => {
        return {...prevItem, selectedToppings: item.selectedToppings.filter(t => t !== topping)}
      })
    } else {
      setItem(prevItem => {
        return {...prevItem, selectedToppings: [...item.selectedToppings, topping]}
      })
    }
  }

  return ReactDom.createPortal(
    <div>
      <div className="overlay" />
      <div className="addOns">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2 className="tea-name">{tea.name}</h2>
        <div>
          <h3>Size</h3>
          {sizeOptions.map((size, i) => 
            <label key={i}>
              <input type="radio" id={size} name="size" value={size} checked={item.size === sizeOptions[i]} onChange={handleSizeChange}/>
              {size}
            <br/>
            </label>
          )}
        </div>

        <div>
          <h3>Ice</h3>
          {iceOptions.map((ice, i) => 
            <label key={i}>
              <input type="radio" id={ice} name="ice" value={ice} checked={item.ice === iceOptions[i]} onChange={handleIceChange} />
              {ice}
            <br/>
            </label>
          )}
        </div>
          
        <div>
          <h3>Sugar</h3>
          {sugarOptions.map((sugar, i) => 
            <label key={i}>
              <input type="radio" id={sugar} name="sugar" value={sugar} checked={item.sugar === sugarOptions[i]} onChange={handleSugarChange} />
              {sugar}
            <br/>
            </label>
          )}
        </div> 

        <div>
          <h3>Toppings</h3>
          {toppings.map(({ label, price }, index) => {
            const topping = toppings[index]
            return (
              <label key={index}>
                <input
                  type="checkbox"
                  id={index}
                  name={label}
                  value={label}
                  checked={item.selectedToppings.includes(topping)}
                  onChange={() => handleToppingsChange(topping)}
                />
                {label} ({formatter.format(price)})
                <br/>
              </label>
            )
          })}
          <br/>
         </div>

         <div className="quantity">
           {/* <h3>+ {item.quantity} -</h3> */}
           <button className="minus" onClick={decQuantity}>-</button>
           <span className="qty">{item.quantity}</span>
           <button className="plus" onClick={incQuantity}>+</button>
         </div>
        <div>
          <button className="add-btn" onClick={() => addItem()}>Add to Cart</button>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  )
}

