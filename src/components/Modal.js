import React from "react"
import { toppings } from "../toppings"

export default function Modal({ item }) {
  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])
  
  const handleSizeChange = (event) => {
    item.size = event.target.value
    forceUpdate()
  }
  
  const handleIceChange = (event) => {
    item.ice = event.target.value
    forceUpdate()
  }

  const handleSugarChange = (event) => {
    item.sugar = event.target.value
    forceUpdate()
  }

  const handleToppingsChange = (index) => {
    if (item.selectedToppings.includes(index)) {
      item.selectedToppings = (item.selectedToppings.filter(i => i !== index))
    } else {
      item.selectedToppings = ([...item.selectedToppings, index])
    }
    forceUpdate()
  }

  return (
    <div className="addOns">
      <h2>{item.name}</h2>
      <div>
        <h3>Size</h3>
        <label>
          <input type="radio" id="regular" name="size" value="Regular" checked={item.size === "Regular"} onChange={handleSizeChange}/>
          Regular
        </label>
        <br/>
        <label>
          <input type="radio" id="large" name="size" value="Large" checked={item.size === "Large"} onChange={handleSizeChange}/>
          Large
        </label>
      </div>

      <div>
        <h3>Ice</h3>
        <label>
          <input type="radio" id="regular" name="ice" value="Regular Ice" checked={item.ice === "Regular Ice"} onChange={handleIceChange}/>
          Regular 
        </label>
        <br/>
        <label>
          <input type="radio" id="half" name="ice" value="Half Ice" checked={item.ice === "Half Ice"} onChange={handleIceChange}/>
          Half 
        </label>
        <br/>
        <label>
          <input type="radio" id="none" name="ice" value="No Ice" checked={item.ice === "No Ice"} onChange={handleIceChange}/>
          No Ice
        </label>
      </div>
        
      <div>
        <h3>Sugar</h3>
        <label>
          <input type="radio" id="100" name="sugar" value="100% Sugar" checked={item.sugar === "100% Sugar"} onChange={handleSugarChange}/>
          100%
        </label>
        <br/>
        <label>
          <input type="radio" id="75" name="sugar" value="75% Sugar" checked={item.sugar === "75% Sugar"} onChange={handleSugarChange}/>
          75% 
        </label>
        <br/>
        <label>
          <input type="radio" id="50" name="sugar" value="50% Sugar" checked={item.sugar === "50% Sugar"} onChange={handleSugarChange}/>
          50%
        </label>
        <br/>
        <label>
          <input type="radio" id="25" name="sugar" value="25% Sugar" checked={item.sugar === "25% Sugar"} onChange={handleSugarChange}/>
          25% 
        </label>
        <br/>
        <label>
          <input type="radio" id="0" name="sugar" value="0% Sugar" checked={item.sugar === "0% Sugar"} onChange={handleSugarChange}/>
          0% 
        </label>
      </div> 

      <div>
        <h3>Toppings (+$.50)</h3>
        {toppings.map(({ label }, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                id={index}
                name={label}
                value={label}
                checked={item.selectedToppings.includes(index)}
                onChange={() => handleToppingsChange(index)}
              />
              {label}
              <br/>
            </label>
          )
        })}
       </div>
    </div>
  )
}

