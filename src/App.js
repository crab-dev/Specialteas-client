import React, { useEffect, useState } from "react"
import './App.css';
import TeaBar from "./components/TeaBar"
import CardList from "./components/cardList"

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5000")
      const newData = await response.json()
      setCards(newData)
    }

    fetchData()
  }, [])
  
  return (
    <div>
      <TeaBar />
      <h2 id="special-teas">Special Teas</h2>
      <CardList cards={cards} />
      <h2 id="milk-teas">Milk Teas</h2>
      <CardList cards={cards} />
      <h2 id="slushies">Slushies</h2>
    </div>
  );
}

export default App;

const MILK_TEAS = [
  {
    id: 1,
    type: "milk tea",
    tea: "Taro Milk Tea"
  },
  {
    id: 2,
    type: "milk tea",
    tea: "Green Milk Tea"
  },
  {
    id: 3,
    type: "milk tea",
    tea: "Black Milk Tea"
  },
  {
    id: 3,
    type: "milk tea",
    tea: "Boop Milk Tea"
  }
]
