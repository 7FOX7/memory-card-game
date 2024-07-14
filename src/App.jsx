import { useState } from 'react'; 
import { initialCards } from './data/data';
import { GameOver } from './components/GameOver';
import { ScoreBoard } from './components/ScoreBoard';
import { Card } from './components/Card';
import { CardBoard } from './components/CardBoard';
import shuffle from './functionality/shuffle';
import './App.css'

function App() {
  const [playMode, setPlayMode] = useState(false); 
  const [cards, setCards] = useState(shuffle(initialCards)); 
  const [clickedCards, setClickedCards] = useState([]); 
  const [score, setScore] = useState(0); 
  const [bestScore, setBestScore] = useState(0); 
  const [gameShouldEnd, setGameShouldEnd] = useState(false); 
  const [gameIsLost, setGameIsLost] = useState(false);   
  
  score > bestScore && setBestScore(score); 
  function handleClick(e) {
    const wasAlreadyClicked = clickedCards.find((clickedCard) => {
      return clickedCard.id === e.currentTarget.id; 
    })

    clickedCards.push(e.currentTarget);
    if(typeof(wasAlreadyClicked) !== "undefined" || clickedCards.length === cards.length) {
      setGameShouldEnd(true)
      if(typeof(wasAlreadyClicked) !== "undefined") {
        setGameIsLost(true); 
        return; 
      }
    }
    else {
      setClickedCards(clickedCards);
      setCards(shuffle(cards)); 
    }
    setScore(score + 1);
    
    // if(typeof(wasAlreadyClicked) !== "undefined") {
    //   setGameShouldEnd(true); 
    //   setGameIsLost(true); 
    //   return; 
    // }
    // if(clickedCards.length === cards.length) {
    //   setGameShouldEnd(true);
    // }
    
  }

  function handleRestart() {
    setCards(shuffle(cards)); 
    setClickedCards([]); 
    setScore(0); 
    setGameShouldEnd(false); 
    setGameIsLost(false); 
  }

  const starting = (
    <>
      <p>This is a starting page!</p>
      <button onClick={() => setPlayMode(true)}>Easy</button>
      <button onClick={() => setPlayMode(true)}>Medium</button>
      <button onClick={() => setPlayMode(true)}>Hard</button>
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
    </>
  )   

  return playMode ? playground : starting
}


export default App
