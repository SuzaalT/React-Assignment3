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
    const card = getRandomCardFromDeck();
    
    //no card in the deck
    if(!card) return null;

    setSelectedCard(card);

    setAllSelectedCards(selectedCards => {
      return [...selectedCards, card];
    });
    
  };

  //Deal x Card Generator
  const dealCards = (numOfCards) => {
    setPickedCard(null);
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

    setAllSelectedCards([...cards])
  }


  const handlePickingCard = (clickedCard) => {
    if(!pickedCard) {
      setPickedCard(clickedCard);
      return;
    }


    //swap cards
    setAllSelectedCards(allSelectedCards => {
      const clickedCardIndex = allSelectedCards.findIndex(c => c === clickedCard);
      const pickedCardIndex = allSelectedCards.findIndex(c => c === pickedCard);
  
      if (clickedCardIndex === -1 || pickedCardIndex === -1) return allSelectedCards;
  
      const newCards = [...allSelectedCards];
      [newCards[clickedCardIndex], newCards[pickedCardIndex]] = [newCards[pickedCardIndex], newCards[clickedCardIndex]];
  
      return newCards;
  });

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

  const handleRegroup = () => {
    setAllSelectedCards(allSelectedCards => {
      const shuffledCards = [...allSelectedCards]
          .sort(() => Math.random() - 0.5);
  
      return shuffledCards;
  });
  }

  return (
    <div className="layout">
      <div className="button-container">
        <button onClick={randomCardGenerator}>WildCard</button>
        <button onClick={() => dealCards(5)}>Deal 5</button>
        <button onClick={() => dealCards(7)}>Deal 7</button>
        <button onClick={() => {
          setAllSelectedCards([]);
          setSelectedCard(null);
        }}>Reset</button>
        <button onClick={handleToss}>Toss</button>
        <button onClick={handleRegroup}>Regroup</button>
      </div>

   

      {deckOfCards.length <= 0 ? <p>No card Remaining</p> : <></>}
      {selectedCard && 
        <div>
          <p>You selected:</p>
          <Card type={selectedCard}></Card>
        </div>}
      {!selectedCard && <Card type={{suit: "", value: "Card"}} />}
      <div className="cards-container">
        {allSelectedCards.map((c, i) => <Card key={i} picked={c === pickedCard} onClick={() => handlePickingCard(c)} type={c}></Card>)}
      </div>
    </div>
  );
}

export default DeckofCard;