import { useState } from 'react'; 
import { useRef } from 'react'; 
import {useEffect} from 'react'; 
import Box from '@mui/material/Box';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { initialCards } from './data/data';
import { GameOver } from './components/GameOver';
import { ScoreBoard } from './components/ScoreBoard';
import { PlayingCard } from './components/PlayingCard';
import { CardBoard } from './components/CardBoard';
import { Footer } from './components/Footer';
import shuffle from './functionality/shuffle';
import audioFactory from './functionality/audioFactory/audioFactory';
import './styles/style.css'; 

const maxCards__easyMode = 3; 
const maxCards__mediumMode = 4; 
const maxCards__hardMode = 5; 

const mainTheme = audioFactory("../src/sounds/main_theme.mp3"); 

function App() {
  const returnRef = useRef(null);
  const flippingRef = useRef(null);
  const helpPopupRef = useRef(null);  
  const [screenWidth, setScreenWidth] = useState(innerWidth); 
  const [screenHeight, setScreenHeight] = useState(innerHeight); 
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

  useEffect(() => {
    function handleResize() {
      setScreenWidth(innerWidth); 
      setScreenHeight(innerHeight); 
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []); 

  score > bestScore && setBestScore(score); 
  function handleClick(e) {
    const wasAlreadyClicked = clickedCards.find((clickedCard) => {
      return clickedCard === e.currentTarget.id; 
    })

    // const clickedCardsCopy = [...clickedCards]; 
    if(typeof(wasAlreadyClicked) !== "undefined") {
      setGameShouldEnd(true); 
      setGameIsLost(true)
      return; 
    }

    clickedCards.push(e.currentTarget.id);
    if(currentRound + 1 === lastRound) {
      setGameShouldEnd(true)
    }
    else {
      flippingRef.current.play(); 
      const updatedCards = getRandomizedCards(cards, clickedCards, initialCards); 
      setClickedCards(clickedCards);
      setCards(shuffle(updatedCards));
      setIsFlipped(true);  
    }
    setScore(score + 1);
  }

  useEffect(() => {
    // const flippingTimeout = setTimeout(() => {
    //   setIsFlipped(false)
    // }, 1000)
    // return () => {
    //   clearTimeout(flippingTimeout); 
    // }
    
    setIsFlipped(false)
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

  function handleAudioPlaying (e) {
    e.preventDefault(); 
     if(audioPlaying) {
      mainTheme.pause(); 
      setAudioPlaying(false)
     }
     else {
      mainTheme.play()
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
    <Board screenWidth={screenWidth} screenHeight={screenHeight}>
      <GameOver endGame={gameShouldEnd} gameIsLost={gameIsLost} onClick={handleRestart}/>
      <Header>
        <Box ref={returnRef} onClick={handleRestart} sx={{
          cursor: "pointer",
          height: "42px", 
          width: "46px",
          border: "3px solid rgb(0, 0, 0)",
          borderRadius: "50%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "flex-start"}}>
          <HomeOutlinedIcon fontSize="large"/>
        </Box>
        {/* <ScoreBoard score={score} bestScore={bestScore}/> */}
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
      <Footer onClick={handleAudioPlaying} audioPlaying={audioPlaying} helpPopup={helpPopupRef} screenWidth={screenWidth} screenHeight={screenHeight}/>
      {/* <p>{currentRound}/{lastRound}</p> */}
      <audio ref={flippingRef} >
        <source src="../src/sounds/flip.mp3"/>
      </audio>
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


export default App
