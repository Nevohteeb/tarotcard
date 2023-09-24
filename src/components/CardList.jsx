// src/components/CardList.js

import React, { useEffect, useState } from "react";
import Card from "./Card";

const CardList = ({ cards }) => {
  const [displayedCards, setDisplayedCards] = useState([]);

  useEffect(() => {
    // Set the initial state of the cards only when cards prop changes
    const unflippedCards = cards.map((card) => ({ ...card, isFlipped: false }));
    setDisplayedCards(unflippedCards);
  }, [cards]);

  return (
    <div className="card-list">
      {displayedCards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
    </div>
  );
};

export default CardList;
