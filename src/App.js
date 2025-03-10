import React, { useState } from "react";
import "./App.css";

function DeckofCard() {
  const suits = ["♠", "♣", "♥", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const deck = [];

  //Deck of Cards
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + suits[i]);
    }
  }
  const [deckOfCards, setDeckOfCards] = useState(deck);

  const [selectedCard, setSelectedCard] = useState(null);
  



  //Random Card Generator
  const randomCardGenerator = () => {
    if(deckOfCards.length <= 0) return;
    const randomIndex = Math.floor(Math.random() * deckOfCards.length); 
    const card = deckOfCards[randomIndex];

    setDeckOfCards((deckOfCards) => {
      return deckOfCards.filter(c => c != card);
    })

    setSelectedCard(card);
  };

  return (
    <div className="deck-container">
      <button onClick={randomCardGenerator}>RandomCard</button>

      {deckOfCards.length <= 0 ? <p>No card Remaining</p> : <></>}
      {selectedCard && <p >You selected: {selectedCard}</p>}
    </div>
  );
}

export default DeckofCard;