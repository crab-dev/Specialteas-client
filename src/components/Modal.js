import React, { useState } from "react"

export default function Modal({ tea }) {
  const [size, setSize] = useState("")
  const [ice, setIce] = useState("")
  const [sugar, setSugar] = useState("")
  const [toppings, setToppings] = useState("")
  
  const handleSizeChange = (event) => {
    setSize(event.target.value)
  }
  
  const handleIceChange = (event) => {
    setIce(event.target.value)
  }

  const handleSugarChange = (event) => {
    setSugar(event.target.value)
  }

  const handleToppingsChange = (event) => {
    setToppings(event.target.value)
  }


  console.log(size, ice, sugar, toppings)

  return (
    <div className="addOns">
      <h2>{tea.name}</h2>
      <div>
        <h3>Size</h3>
        <label>
          <input type="radio" id="regular" name="size" value="regular" checked={size === "regular"} onChange={handleSizeChange}/>
          Regular
        </label>
        <br/>
        <label>
          <input type="radio" id="large" name="size" value="large" checked={size === "large"} onChange={handleSizeChange}/>
          Large
        </label>
      </div>

      <div>
        <h3>Ice</h3>
        <label>
          <input type="radio" id="regular" name="ice" value="regular ice" checked={ice === "regular ice"} onChange={handleIceChange}/>
          Regular 
        </label>
        <br/>
        <label>
          <input type="radio" id="half" name="ice" value="half ice" checked={ice === "half ice"} onChange={handleIceChange}/>
          Half 
        </label>
        <br/>
        <label>
          <input type="radio" id="none" name="ice" value="no ice" checked={ice === "no ice"} onChange={handleIceChange}/>
          No 
        </label>
      </div>
        
      <div>
        <h3>Sugar</h3>
        <label>
          <input type="radio" id="100" name="sugar" value="100%" checked={sugar === "100%"} onChange={handleSugarChange}/>
          100%
        </label>
        <br/>
        <label>
          <input type="radio" id="75" name="sugar" value="75%" checked={sugar === "75%"} onChange={handleSugarChange}/>
          75% 
        </label>
        <br/>
        <label>
          <input type="radio" id="50" name="sugar" value="50%" checked={sugar === "50%"} onChange={handleSugarChange}/>
          50%
        </label>
        <br/>
        <label>
          <input type="radio" id="25" name="sugar" value="25%" checked={sugar === "25%"} onChange={handleSugarChange}/>
          25% 
        </label>
        <br/>
        <label>
          <input type="radio" id="0" name="sugar" value="0%" checked={sugar === "0%"} onChange={handleSugarChange}/>
          0% 
        </label>
      </div> 

      <div>
        <h3>Toppings</h3>
        <label>
          <input type="checkbox" id="boba" name="topping" value="boba" checked={toppings === "boba"} onChange={handleToppingsChange}/>
          Boba
        </label>
        <br/>
        <label>
          <input type="checkbox" id="sago" name="topping" value="sago"/>
          Sago
        </label>
        <br/>
        <label>
          <input type="checkbox" id="pudding" name="topping" value="pudding"/>
          Pudding
        </label>
        <br/>
        <label>
          <input type="checkbox" id="coconutJelly" name="topping" value="coconutJelly"/>
          Coconut Jelly
        </label>
        <br/>
        <label>
          <input type="checkbox" id="rainbowJelly" name="topping" value="rainbowJelly"/>
          Rainbow Jelly
        </label>
        <br/>
        <label>
          <input type="checkbox" id="mangoStar" name="topping" value="mangoStar"/>
          Mango Star Jelly
        </label>
        <br/>
        <label>
          <input type="checkbox" id="yogurtPop" name="topping" value="yogurtPop"/>
          Yogurt Popping Boba
        </label>
        <br/>
        <label>
          <input type="checkbox" id="lycheePop" name="topping" value="lycheePop"/>
          Lychee Popping Boba
        </label>
      </div>

    </div>
  )
}

