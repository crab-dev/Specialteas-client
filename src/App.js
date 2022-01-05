import React, { useEffect, useState } from "react"
import './App.css';
import TeaBar from "./components/TeaBar"
import CardList from "./components/cardList"

function App() {
  const [specialTeas, setSpecialTeas] = useState([])
  const [milkTeas, setMilkTeas] = useState([])
  const [slushies, setSlushies] = useState([])
  const [fruitTeas, setFruitTeas] = useState([])

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

  return (
    <div>
      <TeaBar />
      <h2 id="special-teas">Special Teas</h2>
      <CardList grid={specialTeas} />
      <h2 id="milk-teas">Milk Teas</h2>
      <CardList grid={milkTeas} />
      <h2 id="slushies">Slushies</h2>
      <CardList grid={slushies} />
      <h2 id="fruit-teas">Fruit Teas</h2>
      <CardList grid={fruitTeas} />
    </div>
  )
}

export default App;
