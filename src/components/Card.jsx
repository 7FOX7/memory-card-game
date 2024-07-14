import Box from "@mui/material/Box"

export const Card = ({onClick, cardId, card}) => {
    return (
        <Box id={cardId} onClick={onClick} sx={{backgroundColor: "red", cursor: "pointer"}}>
            <p>{card.content}</p>
        </Box>
    )
}