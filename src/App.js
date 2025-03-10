import React, { useState } from "react";
import "./App.css";


const getWholeDeck = () => {
  const suits = ["♠", "♣", "♥", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const deck = [];

  //Deck of Cards
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(values[j] + suits[i]);
    }
  }

  return deck;
}

function DeckofCard() {
  
  const [deckOfCards, setDeckOfCards] = useState(getWholeDeck());

  const [selectedCard, setSelectedCard] = useState(null);

  const [allSelectedCards, setAllSelectedCards] = useState([]);


  const getRandomCardFromDeck = () => {

    if(deckOfCards.length <= 0) return null;
    const randomIndex = Math.floor(Math.random() * deckOfCards.length); 
    return deckOfCards[randomIndex];
  }
  
  //Random Card Generator
  const randomCardGenerator = () => {

    const card = getRandomCardFromDeck();
    
    //no card in the deck
    if(!card) return null;

    setDeckOfCards((deckOfCards) => {
      return deckOfCards.filter(c => c != card);
    })

    setSelectedCard(card);

    setAllSelectedCards(allSelectedCards => {
      return [...allSelectedCards, card];
    })
    
  };

  const deal5Cards = () => {
    setSelectedCard(null);
    setDeckOfCards([...getWholeDeck()]);
    setAllSelectedCards([]);

    const cards = [];
    for (let i = 0; i < 5; i++) {
      cards.push(getRandomCardFromDeck())
    }

    setAllSelectedCards([...cards])
  }

  return (
    <div className="deck-container">
      <button onClick={randomCardGenerator}>RandomCard</button>
      <button onClick={deal5Cards}>Deal 5</button>
   

      {deckOfCards.length <= 0 ? <p>No card Remaining</p> : <></>}
      {selectedCard && <p >You selected: {selectedCard}</p>}


      {allSelectedCards.map(c => <p>{c}</p>)}
    </div>
  );
}

export default DeckofCard;