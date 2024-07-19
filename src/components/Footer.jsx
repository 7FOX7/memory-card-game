import { useState } from 'react';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import MusicOffIcon from '@mui/icons-material/MusicOff';
import Box from '@mui/material/Box';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Modal from '@mui/material/Modal';
import { Button, Typography, useMediaQuery } from '@mui/material';
import { theme } from '../styles/style';
import { ThemeProvider } from '@mui/material';

export const Footer = ({onClick, audioPlaying, screenWidth, screenHeight}) => {
    const [popup, setPopup] = useState(null); 
    const open = Boolean(popup); 
    const top = screenHeight / 1.5; 
    const left = screenWidth / 2.6; 

    function handleClick() {
        setPopup(true); 
    }

    function handleClose() {
        setPopup(false)
    }

    return (
        <Box className="footer" sx={{display: "flex", flexDirection: "column", width: "100%", height: "12%", background: "red"}}>
            <Box sx={{background: "linear-gradient(to top, rgb(0, 0, 0) 0%, rgba(255, 255, 255, 0) 100%)", width: "100%", height: "30%", position: "relative", top: "2%"}}></Box>
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
                    {/* <Menu 
                        id="footer-menu" 
                        open={open} 
                        anchorEl={anchorEl} 
                        onClose={handleClose}
                        sx={{left: "5%"}}
                        MenuListProps={{sx: {padding: 0}}}
                    >   
                    <MenuItem onClick={handleClose} sx={{padding: 0}}>
                        <Box sx={{background: "linear-gradient(to bottom right, rgb(209, 49, 28), rgb(14, 14, 116))", opacity: 0.6}}>
                            <Box sx={{backgroundImage: "url(../../src/assets/help_popup_art.png)", backgroundSize: "300px 140px", backgroundRepeat: "no-repeat", width: "290px", height: "140px"}}></Box>
                        </Box>
                    </MenuItem>
                    </Menu> */}
                    <Modal open={open} onClose={handleClose}>
                        <Box>
                            <Box sx={{position: "absolute", paddingBlock: "15px", left: "30px", top: `${top}px`, zIndex: "1", width: "50%", height: "50%", overflow: "hidden", textWrap: "wrap", color: "#fff", fontSize: "1em", fontFamily: `${theme.typography.font1.fontFamily}`}}>
                                <span>
                                The rules are simple: do not click on the same card twice. 
                                Try to get the highest possible score. Good luck!
                                </span>
                            </Box>
                            <Box sx={{background: "linear-gradient(to bottom right, rgb(209, 49, 28), rgb(14, 14, 116))", position: "relative", top: `${top}px`, opacity: 0.75}}>
                                <Box sx={{position: "relative", backgroundImage: "url(../../src/assets/help_popup_art.png)", backgroundSize: `300px 150px`, backgroundRepeat: "no-repeat", width: "290px", height: "140px", left: `${left}px`}}></Box>
                            </Box>
                        </Box>
                    </Modal>
                </Box>
            </Box>
        </Box>
    )
}