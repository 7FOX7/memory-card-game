import { useState } from 'react'; 
import { useRef } from 'react'; 
import {useEffect} from 'react'; 
import Box from '@mui/material/Box';
import HomeIcon from '@mui/icons-material/Home';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { initialCards } from './data/data';
import { GameOver } from './components/GameOver';
import { ScoreBoard } from './components/ScoreBoard';
import { PlayingCard } from './components/PlayingCard';
import { CardBoard } from './components/CardBoard';
import shuffle from './functionality/shuffle';
import './styles/style.css'; 

const maxCards__easyMode = 3; 
const maxCards__mediumMode = 4; 
const maxCards__hardMode = 5; 

function App() {
  const returnRef = useRef(null);
  const audioRef = useRef(null); 
  const [playMode, setPlayMode] = useState(false); 
  const [isFlipped, setIsFlipped] = useState(true); 
  const [cards, setCards] = useState(shuffle(initialCards)); 
  const [audioPlaying, setAudioPlaying] = useState(false); 
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
      setIsFlipped(true); 
      setCards(shuffle(updatedCards)); 
    }
    setScore(score + 1);
  }

  useEffect(() => {
    const flipTimeout = setTimeout(() => {
      setIsFlipped(false)
    }, 1000)
    return () => {
      clearTimeout(flipTimeout); 
    }
  }, [score])

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

  function handleAudioPlaying () {
     if(audioPlaying) {
      audioRef.current.pause(); 
      setAudioPlaying(false)
     }
     else {
      audioRef.current.play()
      .then(() => {
        setAudioPlaying(true); 
      }) 
     }
  };

  const starting = (
    <>
      <p>This is a starting page!</p>
      <button id="easyMode" onClick={startNewGame}>Easy</button>
      <button id="mediumMode" onClick={startNewGame}>Medium</button>
      <button id="hardMode" onClick={startNewGame}>Hard</button>
    </>
  )

  const playground = (
    <Board>
      <GameOver endGame={gameShouldEnd} gameIsLost={gameIsLost} onClick={handleRestart}/>
      <Header>
        <Box ref={returnRef} onClick={handleRestart} sx={{
          cursor: "pointer",
          height: "47px", 
          width: "50px",
          background: "green", 
          borderRadius: "50%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "center"}}>
          <HomeIcon fontSize="large"/>
        </Box>
        <ScoreBoard score={score} bestScore={bestScore}/>
      </Header>
      <CardBoard>
        {cards.map((card) => {
          return <PlayingCard 
            key={card.id}
            card={card} 
            onClick={handleClick}
            isFlipped={isFlipped}
          />
        })}
      </CardBoard>
      <p>{currentRound}/{lastRound}</p>
      <Box className="footer">
        <audio ref={audioRef} volume="true" autoPlay>
          <source src="../src/music/main_theme.mp3"/>
        </audio>
        {audioPlaying ? <button onClick={handleAudioPlaying}>Turn audio Off</button> : <button onClick={handleAudioPlaying}>Turn audio On</button>}
      </Box>
    </Board>
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
