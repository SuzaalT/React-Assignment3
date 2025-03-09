import React, { useState } from "react";
import "./App.css";

function DeckofCard() {
  const suits = ["♠", "♣", "♥", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const deck = [];

  //Deck of Cards
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 13; j++) {
      deck.push(values[j] + suits[i]);
    }
  }

  const [selectedCard, setSelectedCard] = useState(null);

  //Random Card Generator
  const RandomCardGenerator = () => {
    const randomIndex = Math.floor(Math.random() * deck.length);
    setSelectedCard(deck[randomIndex]);
  };

  return (
    <div className="deck-container">
      <button onClick={RandomCardGenerator} >RandomCard</button>
      {selectedCard && <p >You selected: {selectedCard}</p>}
    </div>
  );
}

export default DeckofCard;
