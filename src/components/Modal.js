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
          <input type="radio" id="regular" name="size" value="regular" checked={options.size === "regular"} onChange={handleSizeChange}/>
          Regular
        </label>
        <br/>
        <label>
          <input type="radio" id="large" name="size" value="large" checked={options.size === "large"} onChange={handleSizeChange}/>
          Large
        </label>
      </div>

      <div>
        <h3>Ice</h3>
        <label>
          <input type="radio" id="regular" name="ice" value="regular ice" checked={options.ice === "regular ice"} onChange={handleIceChange}/>
          Regular 
        </label>
        <br/>
        <label>
          <input type="radio" id="half" name="ice" value="half ice" checked={options.ice === "half ice"} onChange={handleIceChange}/>
          Half 
        </label>
        <br/>
        <label>
          <input type="radio" id="none" name="ice" value="no ice" checked={options.ice === "no ice"} onChange={handleIceChange}/>
          No 
        </label>
      </div>
        
      <div>
        <h3>Sugar</h3>
        <label>
          <input type="radio" id="100" name="sugar" value="100%" checked={options.sugar === "100%"} onChange={handleSugarChange}/>
          100%
        </label>
        <br/>
        <label>
          <input type="radio" id="75" name="sugar" value="75%" checked={options.sugar === "75%"} onChange={handleSugarChange}/>
          75% 
        </label>
        <br/>
        <label>
          <input type="radio" id="50" name="sugar" value="50%" checked={options.sugar === "50%"} onChange={handleSugarChange}/>
          50%
        </label>
        <br/>
        <label>
          <input type="radio" id="25" name="sugar" value="25%" checked={options.sugar === "25%"} onChange={handleSugarChange}/>
          25% 
        </label>
        <br/>
        <label>
          <input type="radio" id="0" name="sugar" value="0%" checked={options.sugar === "0%"} onChange={handleSugarChange}/>
          0% 
        </label>
      </div> 

      <div>
        <h3>Toppings</h3>
        {toppings.map(({ label, price }, index) => {
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

