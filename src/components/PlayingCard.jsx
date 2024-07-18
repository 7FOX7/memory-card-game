import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box"; 
import Card from "@mui/material/Card";
import ReactCardFlip from "react-card-flip"; 


export const PlayingCard = ({onClick, card, isFlipped}) => {
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="1.5" flipSpeedBackToFront="1.5" containerStyle={{width: "fit-content"}}>  
            <Card id={card.id} onClick={onClick} sx={{ 
                width: "145px", 
                height: "190px", 
                backgroundImage: `url(${card.characterImage_front})`, 
                backgroundSize: "145px 190px", 
            }}>
            </Card> 
            <Card sx={{
                width: "145px", 
                height: "190px", 
                backgroundImage: `url(${card.characterImage_back})`, 
                backgroundSize: "145px 190px", 
                
            }}></Card>  
        </ReactCardFlip>
    )
}