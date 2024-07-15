import { useState } from 'react'; 
import { useRef } from 'react'; 
import { initialCards } from './data/data';
import { GameOver } from './components/GameOver';
import { ScoreBoard } from './components/ScoreBoard';
import { Card } from './components/Card';
import { CardBoard } from './components/CardBoard';
import shuffle from './functionality/shuffle';
import './App.css'


const maxCards__easyMode = 3; 
const maxCards__mediumMode = 4; 
const maxCards__hardMode = 5; 

function App() {
  const returnRef = useRef(null);
  const [playMode, setPlayMode] = useState(false); 
  const [cards, setCards] = useState(shuffle(initialCards)); 
  const [clickedCards, setClickedCards] = useState([]); 
  const [score, setScore] = useState(0); 
  const [bestScore, setBestScore] = useState(0); 
  const [gameShouldEnd, setGameShouldEnd] = useState(false); 
  const [gameIsLost, setGameIsLost] = useState(false);   
  const currentRound = clickedCards.length;
  const lastRound = cards.length + 3; 
  
  score > bestScore && setBestScore(score); 
  function handleClick(e) {
    const wasAlreadyClicked = clickedCards.find((clickedCard) => {
      return clickedCard === e.currentTarget.id; 
    })
    // const clickedCardsCopy = [...clickedCards]; 
    clickedCards.push(e.currentTarget.id);

    if(typeof(wasAlreadyClicked) !== "undefined" || currentRound + 1 === lastRound) {
      setGameShouldEnd(true)
      if(typeof(wasAlreadyClicked) !== "undefined") {
        setGameIsLost(true); 
        return; 
      }
    }
    else {
      const updatedCards = getRandomizedCards(cards, clickedCards, initialCards); 
      setClickedCards(clickedCards);
      setCards(shuffle(updatedCards)); 
    }
    setScore(score + 1);
  }

  function handleRestart(e) {
    if(e.currentTarget === returnRef.current) {
      setPlayMode(false);
      setBestScore(0); 
    }
    setCards(shuffle(cards)); 
    setClickedCards([]); 
    setScore(0); 
    setGameShouldEnd(false); 
    setGameIsLost(false); 
  }

  function startNewGame(e) {
    if(e.currentTarget.id === "easyMode") {
      const cards__easyMode = []; 
      for(let i = 0; i < maxCards__easyMode; i++) {
        // cards__easyMode.push(cards[Math.floor(Math.random() * cards.length)]); 
        const randomCard = getRandomCard(cards__easyMode, initialCards); 
        cards__easyMode.push(randomCard); 
      }
      setCards(shuffle(cards__easyMode)); 
    }

    else if(e.currentTarget.id === "mediumMode") {
      const cards__mediumMode = []; 
      for(let i = 0; i < maxCards__mediumMode; i++) {
        const randomCard = getRandomCard(cards__mediumMode, initialCards); 
        cards__mediumMode.push(randomCard); 
      }
      setCards(shuffle(cards__mediumMode)); 
    }

    else if(e.currentTarget.id === "hardMode") {
      const cards__hardMode = []; 
      for(let i = 0; i < maxCards__hardMode; i++) {
        const randomCard = getRandomCard(cards__hardMode, initialCards); 
        cards__hardMode.push(randomCard); 
      }
      setCards(shuffle(cards__hardMode)); 
    }

    setPlayMode(true); 
  }

  const starting = (
    <>
      <p>This is a starting page!</p>
      <button id="easyMode" onClick={startNewGame}>Easy</button>
      <button id="mediumMode" onClick={startNewGame}>Medium</button>
      <button id="hardMode" onClick={startNewGame}>Hard</button>
    </>
  )

  const playground = (
    <>
      <GameOver endGame={gameShouldEnd} gameIsLost={gameIsLost} onClick={handleRestart}/>
      <ScoreBoard score={score} bestScore={bestScore}/>
      <CardBoard>
        {cards.map((card) => {
          return <Card 
            key={card.id}
            cardId={card.id}
            card={card} 
            onClick={handleClick}
          />
        })}
      </CardBoard>
      <p>{currentRound}/{lastRound}</p>
      <button ref={returnRef} onClick={handleRestart}>Return to main menu</button>
    </>
  )   

  return playMode ? playground : starting
}


function getRandomCard(arr, sourceArray) {
  const randomCard = sourceArray[Math.floor(Math.random() * sourceArray.length)]; 
  if(!arr.includes(randomCard)) {
    return randomCard; 
  } 
  return getRandomCard(arr, sourceArray)
}

function getRandomizedCards(cards, clickedCards, initialCards) { 
  const nonClickedCards = initialCards.filter((card) => {
    const cardId = card.id; 
    return !clickedCards.includes(cardId); 
  }); 
  const randomCard = getRandomCard(cards, nonClickedCards); 
  const cardsCopy = [...cards]; 

  // cardCopy.shift() - returns an element. that is why we call differently
  cardsCopy.shift(); 
  const randomizedCards = nonClickedCards.length === 0 ? cards : [...cardsCopy, randomCard]; 

  return randomizedCards
} 


// lets assume these are not clicked cards: 

// sample card 1
// sample card 5
// sample card 9

// this is the current array of cards randomly selected: 

// sample card 2
// sample card 5
// sample card 3
// sample card 4

// randomCard = getRandomCard(nonClickedCard, cards)
// randomizedCards = [...cards, randomCard]

export default App
