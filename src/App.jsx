import { useState } from 'react'; 
import { useRef } from 'react'; 
import {useEffect} from 'react';  
import Box from '@mui/material/Box';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { HomePage } from './components/HomePage';
import { Board } from './components/Board';
import { Header } from './components/Header';
import { initialCards } from './data/data';
import { GameOver } from './components/GameOver';
import { ScoreBoard } from './components/ScoreBoard';
import { MainBody } from './components/MainBody';
import { PlayingCard } from './components/PlayingCard';
import { CardBoard } from './components/CardBoard';
import { Footer } from './components/Footer';
import { RoundDisplayer } from './components/RoundDisplayer';
import audioFactory from './functionality/audioFactory';
import shuffle from './functionality/shuffle';
import getRandomCard from './functionality/getRandomCard';
import './styles/style.css'; 

const maxCards__easyMode = 3; 
const maxCards__mediumMode = 4; 
const maxCards__hardMode = 5; 


// const mainTheme = audioFactory("../src/sounds/main_theme.mp3")
function App() {
  const returnRef = useRef(null);
  const flippingRef = useRef(null);
  const [screenWidth, setScreenWidth] = useState(innerWidth); 
  const [screenHeight, setScreenHeight] = useState(innerHeight); 
  const [mainTheme, setMainTheme] = useState(audioFactory(null)); 
  const [playMode, setPlayMode] = useState(false); 
  const [audioPlaying, setAudioPlaying] = useState(true);  
  const [isFlipped, setIsFlipped] = useState(false); 
  const [cards, setCards] = useState(shuffle(initialCards)); 
  const [clickedCards, setClickedCards] = useState([]); 
  const [score, setScore] = useState(0); 
  const [bestScore, setBestScore] = useState(0); 
  const [gameShouldEnd, setGameShouldEnd] = useState(false); 
  const [gameIsLost, setGameIsLost] = useState(false);   
  const currentRound = clickedCards.length;
  const lastRound = cards.length + 3; 

  console.log('the width of a screen: ' + screenWidth); 
  console.log('the height of a screen: ' + screenHeight); 
  
  useEffect(() => {
    if(playMode) {
      const mainThemeInstance = audioFactory("../src/sounds/main_theme.mp3"); 
      setAudioPlaying(true); 
      mainThemeInstance.play(); 
      setMainTheme(mainThemeInstance)
    }
    else {
      (setAudioPlaying(false), mainTheme.pause(), setMainTheme(null))
    }
  }, [playMode])

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

  useEffect(() => {
    if(isFlipped) {
      const updatedCards = getRandomizedCards(cards, clickedCards, initialCards); 
      setTimeout(() => {
        setCards(updatedCards);
      }, 1000) 
      setTimeout(() => {
        setIsFlipped(false)
      }, 1500)
    } 
  }, [score])

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
      setClickedCards(clickedCards);
      setIsFlipped(true); 
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

  function handleAudioPlaying () {
    if(audioPlaying && mainTheme) {
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
    const updatedCards = shuffle(randomizedCards); 
    
    return updatedCards; 
  } 

  function startNewGame(e) {
    if(e.currentTarget.id === "easyMode") {
      const cards__easyMode = []; 
      for(let i = 0; i < maxCards__easyMode; i++) {
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
    <HomePage onClick={startNewGame} screenWidth={screenWidth} screenHeight={screenHeight}/>
  )

  const playground = (
    <Board screenWidth={screenWidth} screenHeight={screenHeight}>
      <GameOver endGame={gameShouldEnd} gameIsLost={gameIsLost} onClick={handleRestart}/>
      <Header>
        <Box ref={returnRef} onClick={handleRestart} sx={{
          cursor: "pointer",
          height: "37px", 
          width: "fit-content",
          border: "3px solid rgb(0, 0, 0)",
          borderRadius: "50%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "flex-end"}}>
          <HomeOutlinedIcon fontSize="large"/>
        </Box>
      </Header>
      <MainBody> 
        <ScoreBoard score={score} bestScore={bestScore} screenWidth={screenWidth}/>
        <CardBoard>
          {cards.map((card) => {
            return <PlayingCard 
              key={card.id}
              card={card} 
              onClick={handleClick}
              isFlipped={isFlipped}
              screenWidth={screenWidth}
            />
          })}
        </CardBoard>
        <RoundDisplayer currentRound={currentRound} lastRound={lastRound}/>
      </MainBody>
      <Footer screenHeight={screenHeight} onClick={handleAudioPlaying} audioPlaying={audioPlaying}/>
      <audio ref={flippingRef}>
        <source src="../src/sounds/flip.mp3"/>
      </audio>
    </Board>
  )   

  return playMode ? playground : starting
}


export default App
