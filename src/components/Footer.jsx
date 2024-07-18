import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import Box from '@mui/material/Box';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { theme } from '../styles/style';
import { Button, useMediaQuery } from '@mui/material';

export const Footer = ({onClick, audioPlaying}) => {
    return (
        <Box className="footer" sx={{display: "flex", flexDirection: "column", width: "100%", height: "12%", background: "red"}}>
            <Box sx={{background: "linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%)", width: "100%", height: "30%", position: "relative", top: "2%"}}></Box>
            <Box sx={{background: "rgb(0, 0, 0)", width: "100%", height: "70%", display: "flex", justifyContent: "space-around", alignItems: "center", overflow: "hidden", paddingBlock: "5px"}}>
                <Box>
                    <Button onClick={onClick} style={{background: "#fff", borderRadius: "50px", maxWidth: '47px', maxHeight: '45px', minWidth: '47px', minHeight: '45px'}}>
                        <Box>
                            {audioPlaying ? <MusicNoteIcon sx={{fill: "rgb(0, 0, 0)"}}/> : <MusicOffIcon sx={{fill: "rgb(0, 0, 0)"}}/>}
                        </Box>
                    </Button>
                </Box>
                <Box>
                    <Button style={{background: "#fff", borderRadius: "50px", maxWidth: '47px', maxHeight: '45px', minWidth: '47px', minHeight: '45px'}}>
                        <Box>
                            <QuestionMarkIcon sx={{fill: "rgb(0, 0, 0)"}}/>
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}