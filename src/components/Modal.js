import React from "react"
import { toppings } from "../toppings"

export default function Modal({ tea, options }) {
  const [, updateState] = React.useState()
  const forceUpdate = React.useCallback(() => updateState({}), [])
  
  const handleSizeChange = (event) => {
    options.size = event.target.value
    forceUpdate()
  }
  
  const handleIceChange = (event) => {
    options.ice = event.target.value
    forceUpdate()
  }

  const handleSugarChange = (event) => {
    options.sugar = event.target.value
    forceUpdate()
  }

  const handleCheckedChange = (index) => {
    if (options.selectedToppings.includes(index)) {
      options.selectedToppings = (options.selectedToppings.filter(i => i !== index))
    } else {
      options.selectedToppings = ([...options.selectedToppings, index])
    }
    forceUpdate()
  }

  return (
    <div className="addOns">
      <h2>{tea.name}</h2>
      <div>
        <h3>Size</h3>
        <label>
          <input type="radio" id="regular" name="size" value="Regular" checked={options.size === "Regular"} onChange={handleSizeChange}/>
          Regular
        </label>
        <br/>
        <label>
          <input type="radio" id="large" name="size" value="Large" checked={options.size === "Large"} onChange={handleSizeChange}/>
          Large
        </label>
      </div>

      <div>
        <h3>Ice</h3>
        <label>
          <input type="radio" id="regular" name="ice" value="Regular Ice" checked={options.ice === "Regular Ice"} onChange={handleIceChange}/>
          Regular 
        </label>
        <br/>
        <label>
          <input type="radio" id="half" name="ice" value="Half Ice" checked={options.ice === "Half Ice"} onChange={handleIceChange}/>
          Half 
        </label>
        <br/>
        <label>
          <input type="radio" id="none" name="ice" value="No Ice" checked={options.ice === "No Ice"} onChange={handleIceChange}/>
          No Ice
        </label>
      </div>
        
      <div>
        <h3>Sugar</h3>
        <label>
          <input type="radio" id="100" name="sugar" value="100% Sugar" checked={options.sugar === "100% Sugar"} onChange={handleSugarChange}/>
          100%
        </label>
        <br/>
        <label>
          <input type="radio" id="75" name="sugar" value="75% Sugar" checked={options.sugar === "75% Sugar"} onChange={handleSugarChange}/>
          75% 
        </label>
        <br/>
        <label>
          <input type="radio" id="50" name="sugar" value="50% Sugar" checked={options.sugar === "50% Sugar"} onChange={handleSugarChange}/>
          50%
        </label>
        <br/>
        <label>
          <input type="radio" id="25" name="sugar" value="25% Sugar" checked={options.sugar === "25% Sugar"} onChange={handleSugarChange}/>
          25% 
        </label>
        <br/>
        <label>
          <input type="radio" id="0" name="sugar" value="0% Sugar" checked={options.sugar === "0% Sugar"} onChange={handleSugarChange}/>
          0% 
        </label>
      </div> 

      <div>
        <h3>Toppings</h3>
        {toppings.map(({ label }, index) => {
          return (
            <label key={index}>
              <input
                type="checkbox"
                id={index}
                name={label}
                value={label}
                checked={options.selectedToppings.includes(index)}
                onChange={() => handleCheckedChange(index)}
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

