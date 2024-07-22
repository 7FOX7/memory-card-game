import useMediaQuery from "@mui/material/useMediaQuery";
import Card from "@mui/material/Card";
import ReactCardFlip from "react-card-flip"; 
import { theme } from "../styles/style";

export const PlayingCard = ({onClick, card, isFlipped, screenWidth}) => {
    const smallScreen = useMediaQuery(theme.breakpoints.down('laptop')); 
    const cardWidth = smallScreen ? Math.floor((screenWidth / 4.5) + 15) : Math.floor((screenWidth / 6.5)); 
    const cardHeight = smallScreen ? Math.floor((screenWidth / 4) + 65) : Math.floor((screenWidth / 5) + 15);  

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
                boxShadow: `${smallScreen ? "0px 0px 3px 2px rgb(0, 0, 0)" : "0px 0px 6px 4px rgb(0, 0, 0)"}`, 
                cursor: "pointer"
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