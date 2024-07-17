import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box"; 
import Card from "@mui/material/Card";
import ReactCardFlip from "react-card-flip"; 


export const PlayingCard = ({onClick, card, isFlipped}) => {
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack="1" flipSpeedBackToFront="1">  
            <Card id={card.id} onClick={onClick} sx={{ 
                width: "145px", 
                height: "190px", 
                backgroundImage: `url(${card.characterImage})`, 
                backgroundSize: "cover", 
            }}>
            </Card> 
            <Card sx={{
                width: "145px", 
                height: "190px"
            }}>
                <CardContent>
                    <p>this is the back</p>
                </CardContent>
            </Card>  
        </ReactCardFlip>
    )
}