import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box"; 
import Card from "@mui/material/Card";
import ReactCardFlip from "react-card-flip"; 


export const PlayingCard = ({onClick, card, isFlipped, screenWidth}) => {
    const cardWidth = Math.floor((screenWidth / 4.5) + 15); 
    const cardHeight = Math.floor((screenWidth / 4) + 65);  

    console.log('card width: ' + cardWidth); 
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="1.5" flipSpeedBackToFront="1.5" containerStyle={{
            width: "fit-content",
            height: "fit-content"
        }}>  
            <Card id={card.id} onClick={onClick} sx={{ 
                width: `${cardWidth}px`, 
                height: `${cardHeight}px`, 
                backgroundImage: `url(${card.characterImage_front})`, 
                backgroundSize: `${cardWidth}px ${cardHeight}px`,
                boxShadow: "0px 0px 3px 2px rgb(0, 0, 0)" 
            }}>
            </Card> 
            <Card sx={{
                width: `${cardWidth}px`, 
                height: `${cardHeight}px`, 
                backgroundImage: `url(${card.characterImage_back})`, 
                backgroundSize: `${cardWidth}px ${cardHeight}px`
            }}></Card>  
        </ReactCardFlip>
    )
}