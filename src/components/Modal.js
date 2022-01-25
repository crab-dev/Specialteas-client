import React, { useState } from "react"
import { toppings } from "../toppings"
import { formatter } from "../priceFormatter"
import { sizeOptions, iceOptions, sugarOptions } from "../itemOptions"

export default function Modal({tea, item, setItem}) {
  console.log(item)

  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])

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

  return (
    <div className="addOns">
      <h2>{tea.name}</h2>
      <div>
        <h3>Size</h3>
        {sizeOptions.map((size, i) => 
          <label>
            <input type="radio" id={size} name="size" value={size} checked={item.size === sizeOptions[i]} onChange={handleSizeChange} />
            {size}
          <br/>
          </label>
        )}
      </div>

      <div>
        <h3>Ice</h3>
        {iceOptions.map((ice, i) => 
          <label>
            <input type="radio" id={ice} name="ice" value={ice} checked={item.ice === iceOptions[i]} onChange={handleIceChange} />
            {ice}
          <br/>
          </label>
        )}
      </div>
        
      <div>
        <h3>Sugar</h3>
        {sugarOptions.map((sugar, i) => 
          <label>
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
       </div>
    </div>
  )
}

