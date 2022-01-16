import React, { useEffect, useState } from "react"
import './App.css';
import TeaBar from "./components/TeaBar"
import CardList from "./components/CardList"

function App() {
  const [specialTeas, setSpecialTeas] = useState([])
  const [milkTeas, setMilkTeas] = useState([])
  const [slushies, setSlushies] = useState([])
  const [fruitTeas, setFruitTeas] = useState([])
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000")
      const data = await response.json()

      const specialTeas = []
      const milkTeas = []
      const slushies = []
      const fruitTeas = []

      for (const tea of data) {
        switch (tea.kind) {
          case "special":
            specialTeas.push(tea) 
            break
          case "milk":
            milkTeas.push(tea)
            break
          case "slushie":
            slushies.push(tea)
            break
          case "fruit":
            fruitTeas.push(tea)
            break
        default: 
          console.log("No more teas!")
        }
      }
      setMilkTeas(milkTeas)
      setSpecialTeas(specialTeas)
      setSlushies(slushies)
      setFruitTeas(fruitTeas)
    }

    fetchData()
  }, [])

  function addToCart(item) {
    setItems(prevItems => [...prevItems, item])
    console.log(items)
  }

  function clearCart() {
    setItems([])
  }

  return (
    <div>
      <TeaBar items={items} clearCart={clearCart} />
      <h2 className="title" id="special-teas">Special Teas</h2>
      <CardList teas={specialTeas} addToCart={addToCart}/>
      <h2 className="title" id="milk-teas">Milk Teas</h2>
      <CardList teas={milkTeas} addToCart={addToCart}/>
      <h2 className="title" id="slushies">Slushies</h2>
      <CardList teas={slushies} addToCart={addToCart}/>
      <h2 className="title" id="fruit-teas">Fruit Teas</h2>
      <CardList teas={fruitTeas} addToCart={addToCart}/>
    </div>
  )
}

export default App;
