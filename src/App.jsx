import React, { useState } from "react";
import CardList from "./components/CardList";
import tarotCards from "./tarotDeck/tarotCards";
import "./App.css";

function App() {
  const [selectedCards, setSelectedCards] = useState([]);
  const [buttonText, setButtonText] = useState("Deal Your Cards!");

  const shuffleAndDraw = () => {
    // If the button says "Deal Your Cards!", shuffle the cards
    if (buttonText === "Deal Your Cards!") {
      // Randomly select 3 cards
      const newSelectedCards = [...tarotCards].sort(() => 0.5 - Math.random()).slice(0, 3);
      setSelectedCards(newSelectedCards);

      // Change the button text to "Start Again"
      setButtonText("Start Again");
    } else {
      // If the button says "Start Again", reset the app
      setSelectedCards([]);
      setButtonText("Deal Your Cards!");
    }
  };

  return (
    <div className="app">
      <h1>Tarot Card Reading</h1>
      <button onClick={shuffleAndDraw}>{buttonText}</button>
      <CardList cards={selectedCards} />
    </div>
  );
}

export default App;
