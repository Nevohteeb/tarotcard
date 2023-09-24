import React, { useState } from "react";

const Card = ({ card }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={flipCard}>
      <div className="card-inner front">
        <img src="/cardback.avif" alt="Card Back" />
      </div>
      <div className="card-inner back">
        <img src={card.imageUrl} alt={card.name} />
      </div>
    </div>
  );
};

export default Card;
