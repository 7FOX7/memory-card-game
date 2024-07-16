import Box from "@mui/material/Box"; 
import "../styles/style.css"; 

export const ScoreBoard = ({score, bestScore}) => {
    return (
        <Box className="score-board">
            <p>your score is: {score}</p>
            <p>your best score is: {bestScore}</p>
        </Box>
    )      
} 