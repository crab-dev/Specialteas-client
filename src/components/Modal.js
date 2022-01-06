import React from "react"

export default function Modal({ tea }) {
  return (
    <div className="addOns">
      <h2>{tea.name}</h2>
      <div>
        <h3>Size</h3>
        <label>
          <input type="radio" id="regular" name="size" value="regular"/>
          Regular
        </label>
        <br/>
        <label>
          <input type="radio" id="large" name="size" value="large"/>
          Large
        </label>
      </div>

      <div>
        <h3>Ice</h3>
        <label>
          <input type="radio" id="regular" name="ice" value="regular"/>
          Regular
        </label>
        <br/>
        <label>
          <input type="radio" id="half" name="ice" value="half"/>
          Half
        </label>
        <br/>
        <label>
          <input type="radio" id="none" name="ice" value="none"/>
          None
        </label>
      </div>
        
      <div>
        <h3>Sugar</h3>
        <label>
          <input type="radio" id="100" name="sugar" value="100"/>
          100%
        </label>
        <br/>
        <label>
          <input type="radio" id="75" name="sugar" value="75"/>
          75%
        </label>
        <br/>
        <label>
          <input type="radio" id="50" name="sugar" value="50"/>
          50%
        </label>
        <br/>
        <label>
          <input type="radio" id="25" name="sugar" value="25"/>
          25%
        </label>
        <br/>
        <label>
          <input type="radio" id="0" name="sugar" value="0"/>
          0%
        </label>
      </div> 

      <div>
        <h3>Toppings</h3>
        <label>
          <input type="checkbox" id="boba" name="topping" value="boba"/>
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

