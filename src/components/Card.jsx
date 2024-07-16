import Box from "@mui/material/Box"
import ReactCardFlip from "react-card-flip"
import "../styles/style.css"; 

export const Card = ({onClick, cardId, card, isFlipped}) => {
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >   
                <Box id={cardId} onClick={onClick} className="card card-back">
                    <p>{card.content}</p>
                </Box>
                <Box id={cardId} className="card card-front">
                    <p>{card.content}</p>
                </Box>  
        </ReactCardFlip>
    )
}