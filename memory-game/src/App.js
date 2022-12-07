import "./App.css";
import React from 'react'
import {useState} from 'react'
import TarotCard from "./components/tarot-card";
import chariot from "./images/chariot.svg";
import death from "./images/death.svg";
import devil from "./images/devil.svg";
import emporer from "./images/emporer.svg";
import fool from "./images/fool.svg";
import hangedman from './images/hangedman.svg'
import heirophant from './images/heirophant.svg'
import hermit from './images/hermit.svg'
import highpriestess from './images/highpriestess.svg'
import judgement from './images/judgement.svg'
import justice from './images/justice.svg'
import lovers from './images/lovers.svg'
import magician from './images/magician.svg'
import moon from './images/moon.svg'
import strength from './images/strength.svg'
import sun from './images/sun.svg'


function App() {
  let cards1 = [
    { id: "chariot", path: chariot },
    { id: "death", path: death },
    { id: "devil", path: devil },
    { id: "emporer", path: emporer },
    { id: "fool", path: fool },
    {id: 'hangedman', path: hangedman},
    {id:'heirophant', path: heirophant},
    {id:'hermit', path: hermit},
  ];
  let cards2 = [
    {id:'highpriestess', path:highpriestess},
    {id:'judgement', path:judgement},
    {id:'justice', path:justice},
    {id:'lovers', path:lovers},
    {id:'magician', path:magician},
    {id:'moon', path:moon},
    {id:'strength', path:strength},
    {id:'sun', path:sun}
  ]

    //Dursetenfield shuffle algorithm
    function shuffleArray(array) {
      for (var i = array.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = array[i];
          array[i] = array[j];
          array[j] = temp;
      }
      return array
  }

  let shuffled1 = shuffleArray(cards1)
  let shuffled2 = shuffleArray(cards2)

  const [cardsChosen, setCardsChosen] = useState([])
  const [currentScore, setCurrentScore] = useState('')
  const [highScore, setHighScore] = useState('')


  function checkCard(event) {
    let id = event.target.id
    cardsChosen.map((card) => {
      if (card === id) {
        console.log('match')
        //reset score to 0
        //empty the cardsChosen array
        //check if the last score before losing was high score
        //reshuffle
      }
      if (card !==id) {
        //add 1 to score
        //reshuffle
        console.log('no-match')
      }})
  }

  return (
    <div className="App">
      <div className="big-container">
        <div className="header">
          <div className="title">
            <p id="title-text">Memory Game</p>
          </div>
          <div className="scoreboard">
            <div className="score-text-container">
              <p className="score-text">Current Score:</p>
              <span id="current-score"></span>
            </div>
            <div className="score-text-container">
              <p className="score-text">High Score:</p>
              <span id="high-score"></span>
            </div>
          </div>
        </div>
        <div className="first-row">
          {shuffled1.map((card) => (
          <TarotCard cardName={card.id} imageFile={card.path} key={card.id}></TarotCard>))}
        </div>
        <div className="second-row">
          {shuffled2.map((card) => (
            <TarotCard cardName={card.id} imageFile={card.path} key={card.id}></TarotCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
