import React, { useState } from "react";
import "./App.css";

const suits = ["♠", "♣", "♥", "♦"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const deck = [];


for ( let i = 0; i < 4; i++){
  for ( let j = 0; j < 13; j++){
    deck.push( values[j] + suits[i]);
  }
}
console.log(deck);
