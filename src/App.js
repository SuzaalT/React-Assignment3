import React, { useState } from "react";
import "./App.css";

import Card from "./Card";

const getWholeDeck = () => {
  const suits = ["♠", "♣", "♥", "♦"];
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  const deck = [];

  //Deck of Cards
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push({
        suit: suits[i],
        value: values[j]
      });
    }
  }

  return deck;
}

function DeckofCard() {
  
  const [deckOfCards, setDeckOfCards] = useState(getWholeDeck());

  const [selectedCard, setSelectedCard] = useState(null);

  const [allSelectedCards, setAllSelectedCards] = useState([]);

  const [pickedCard, setPickedCard] = useState(null);


  const getRandomCardFromDeck = () => {

    if(deckOfCards.length <= 0) return null;
    const randomIndex = Math.floor(Math.random() * deckOfCards.length); 
    return deckOfCards[randomIndex];
  }

  
  //Random Card Generator
  const randomCardGenerator = () => {

    if(!selectedCard) setAllSelectedCards([]);

    const card = getRandomCardFromDeck();
    
    //no card in the deck
    if(!card) return null;

    setDeckOfCards((deckOfCards) => {
      return deckOfCards.filter(c => c != card);
    })

    setSelectedCard(card);
    setPickedCard(card);

    setAllSelectedCards(selectedCards => {
      return [...selectedCards, card];
    });
    
  };

  //Deal x Card Generator
  const dealCards = (numOfCards) => {
    setSelectedCard(null);
    setDeckOfCards([...getWholeDeck()]);
    setAllSelectedCards([]);

    const cards = [];
    for (let i = 0; i < numOfCards; i++) {
      const card = getRandomCardFromDeck();
      cards.push(card);
      setDeckOfCards((deckOfCards) => {
        return deckOfCards.filter(c => c != card);
      })
    }

    setPickedCard(cards[cards.length - 1])

    setAllSelectedCards([...cards])
  }


  const handlePickingCard = (clickedCard) => {
    if(!pickedCard) {
      pickedCard = clickedCard;
      return;
    }


    //TODO: swap the cards places

  }

  const handleToss = () => {
    setAllSelectedCards(allSelectedCards => {
      return allSelectedCards.filter(c => c != pickedCard);
    })
    setDeckOfCards(deckOfCards => {
      return [...deckOfCards, pickedCard];
    })

    setPickedCard(null);
  }

  return (
    <div className="layout">
      <div className="button-container">
        <button onClick={randomCardGenerator}>RandomCard</button>
        <button onClick={() => dealCards(5)}>Deal 5</button>
        <button onClick={() => dealCards(7)}>Deal 7</button>
        <button onClick={() => {
          setAllSelectedCards([]);
          setSelectedCard(null);
        }}>Reset</button>
        <button onClick={handleToss}>Toss</button>
      </div>

   

      {deckOfCards.length <= 0 ? <p>No card Remaining</p> : <></>}
      {selectedCard && 
        <div>
          <p>You selected:</p>
          <Card type={selectedCard}></Card>
        </div>}

      <div className="cards-container">
        {allSelectedCards.map((c, i) => <Card key={i} picked={c === pickedCard} onClick={() => setPickedCard(c)} type={c}></Card>)}
      </div>
    </div>
  );
}

export default DeckofCard;