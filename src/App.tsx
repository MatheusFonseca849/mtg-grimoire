import { useState } from "react";
import { useEffect } from "react";
import { api } from "./api.ts";
import Card from "./components/Card/index.tsx";



function App() {
 
  const [cards, setCards] = useState([])


  useEffect(() => {

    const getCards = async () => {
      try {
        const response = await api.get("cards?pageSize=30&page=3") //use & to join parameters
        setCards(response.data.cards.filter(card => card.imageUrl)) //only allows cards that have a multiverseID and image
        
      } catch (error) {
        console.log(error) //add toast here
      }
    }
    getCards()
    
  }, []);
  console.log(cards)
  return (
    <ul>
     {
      
      cards.map((card) => {
        
        return(
          <Card card={card}/>
        )
      })
     }
    </ul>
  )
}

export default App
