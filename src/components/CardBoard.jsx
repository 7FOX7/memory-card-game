import Box from "@mui/material/Box"; 
import "../styles/style.css"; 

export const CardBoard = ({children}) => {
    return (
        <Box className="card-board">
            {children}
        </Box>
    )
}