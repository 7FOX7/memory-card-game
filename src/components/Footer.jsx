import { useState } from 'react';
import {useRef} from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import Box from '@mui/material/Box';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { theme } from '../styles/style';
import {help_popup_sound} from '../data/data';
import {help_popup_art} from '../data/data';

export const Footer = ({screenHeight, onClick, audioPlaying}) => {
    const helpPopupRef = useRef(null); 
    const [popup, setPopup] = useState(null); 
    const open = Boolean(popup); 
    const top = Math.floor(screenHeight / 1.34); 

    function handleClick() {
        setPopup(true); 
        helpPopupRef.current.volume = 0.5; 
        helpPopupRef.current.play(); 
    }

    function handleClose() {
        setPopup(false)
    }

    return (
        <Box className="footer" sx={{display: "flex", flexDirection: "column", width: "100%", height: "12%"}}>
            <Box sx={{background: "linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%)", width: "100%", height: "38%", position: "relative", top: "2%"}}></Box>
            <Box sx={{background: "rgb(0, 0, 0)", width: "100%", height: "70%", display: "flex", justifyContent: "space-around", alignItems: "center", overflow: "hidden", paddingBlock: "5px"}}>
                <Box>
                    <Button variant="contained" onClick={onClick} sx={{background: "#fff", borderRadius: "50px", maxWidth: '47px', maxHeight: '45px', minWidth: '47px', minHeight: '45px', display: "flex", alignItems: "flex-end"}} hover="">
                        <Box>
                            {audioPlaying ? <MusicNoteIcon sx={{fill: "rgb(0, 0, 0)"}}/> : <MusicOffIcon sx={{fill: "rgb(0, 0, 0)"}}/>}
                        </Box>
                    </Button>
                </Box>
                <Box>
                    <Button variant="contained" onClick={handleClick} sx={{background: "#fff", borderRadius: "50px", maxWidth: '47px', maxHeight: '45px', minWidth: '47px', minHeight: '45px', display: "flex", alignItems: "flex-end"}}>
                        <Box>
                            <QuestionMarkIcon sx={{fill: "rgb(0, 0, 0)"}}/>
                        </Box>
                    </Button>
                </Box>
            </Box>
            <Modal open={open} onClose={handleClose}>
                <Box sx={{display: "flex", width: "100%", height: "100%"}} onClick={handleClose}>
                    <Box sx={{position: "relative", top: `${top}px`, display: "flex", width: "550px", justifyContent: "space-between", marginLeft: "auto"}}>
                        <Box sx={{paddingInline: "15px", paddingBlock: "20px", zIndex: "2", width: "220px", height: "fit-content", overflow: "hidden", textWrap: "wrap", color: "#fff", fontSize: "1em", fontFamily: `${theme.typography.font1.fontFamily}`}}>
                            <span>
                            The rules are simple: do not click on the same card twice. 
                            Try to get the highest possible score. Good luck!
                            </span>
                        </Box>
                        <Box sx={{position: "absolute", width: "100%", display: "flex"}}>
                            <Box sx={{background: "linear-gradient(to bottom right, rgb(209, 49, 28), rgb(14, 14, 116))", opacity: "0.65", zIndex: "1", width: "100%", borderTopLeftRadius: "30px", borderBottomLeftRadius: "8px", display: "flex"}}>
                                <Box sx={{backgroundImage: `url(${help_popup_art})`, backgroundSize: `260px 140px`, backgroundRepeat: "no-repeat", width: "220px", height: "140px", marginLeft: "auto"}}></Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Modal>
            <audio ref={helpPopupRef}>
                <source src={help_popup_sound}></source>
            </audio>
        </Box>
    )
}