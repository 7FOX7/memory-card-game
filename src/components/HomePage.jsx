import { useState } from "react";
import { useEffect } from "react";
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { showTextAnimation, hideTextAnimation } from "../animations/animations";
import { theme } from "../styles/style";
import "../styles/style.css"; 
import useMediaQuery from "@mui/material/useMediaQuery";
import backgroundVideo from "../../public/video_background.mp4"; 


export const HomePage = ({onClick, screenWidth, screenHeight}) => {
    const [hideText, setHideText] = useState(false); 
    const [fontSize, setFontSize] = useState(null); 
    const [containerWidth, setContainerWidth] = useState(null); 
    const [containerHeight, setContainerHeight] = useState(null);  
    const [containerLeftDirection, setContainerLeftDirection] = useState(null); 
    const [buttonWidth, setButtonWidth] = useState(null); 
    const [buttonFontSize, setButtonFontSize] = useState(null); 
    const [textLeftDirection, setTextLeftDirection] = useState(null);

    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop'));
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop')); 
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop')); 

    useEffect(() => {
        if(isMobile) {
            setFontSize('2rem'); 
            setContainerWidth('75%'); 
            setContainerHeight('45%'); 
            setContainerLeftDirection('-25%'); 
            setButtonWidth('80%'); 
            setButtonFontSize('1.3rem'); 
            setTextLeftDirection('20%'); 
        }
        else if(isTablet) {
            setFontSize('3.2rem'); 
            setContainerWidth('60%'); 
            setContainerHeight('42%'); 
            setContainerLeftDirection('-10%'); 
            setButtonWidth('50%'); 
            setButtonFontSize('1.5rem'); 
            setTextLeftDirection('30%'); 
        }
        else if(isLaptop) {
            setFontSize('2.8rem'); 
            setContainerWidth('35%'); 
            setContainerHeight('50%'); 
            setContainerLeftDirection('15%'); 
            setButtonWidth('50%'); 
            setButtonFontSize('1.5rem'); 
            setTextLeftDirection('50%'); 
        }
        else if(isDesktop) {
            setFontSize('3.5rem'); 
            setContainerWidth('30%'); 
            setContainerHeight('50%'); 
            setContainerLeftDirection('20%'); 
            setButtonWidth('40%'); 
            setButtonFontSize('1.5rem'); 
            setTextLeftDirection('55%'); 
        }
    }, [screenWidth, screenHeight])

    useEffect(() => {
        const timeout = setTimeout(() => {
            setHideText(!hideText)
        }, 1500)

        return () => {
            clearTimeout(timeout)
        }
    }, [hideText])

    const text = <Box sx={{
        position: "absolute", 
        color: "white", 
        fontFamily: theme.typography.font3.fontFamily, 
        fontSize: `${fontSize}`, 
        animation: `${hideText ? hideTextAnimation : showTextAnimation } 1s ease-in-out both`, 
        WebkitAnimation: `${hideText ? hideTextAnimation : showTextAnimation } 1s ease-in-out both`, 
        top: "80%",
        left: `${textLeftDirection}`, 
        transform: "rotate(-12deg)", 
        textWrap: "nowrap", 
        cursor: "default", 
    }}>
        Please, select difficulty
    </Box>

    return (
        <>
            <Box sx={{
            width: "100vw", 
            height: "100vh", 
            overflow: "hidden"
        }}>
            <Box sx={{
            background: "#fff",
            paddingBlock: "10px", 
            paddingInline: "25px", 
            width: containerWidth, 
            height: containerHeight, 
            position: "absolute", 
            transform: "translate(50%, -50%)", 
            top: "47%", 
            left: containerLeftDirection, 
            zIndex: "3", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-around", 
            borderRadius: "15px", 
            boxShadow: "0px 0px 10px 7px rgb(50, 50, 50)"
        }}>
            <Button id="easyMode" onClick={onClick} sx={{
                background: theme.palette.easyDifficultyButtonColor.main, 
                display: "flex", 
                alignItems: "center",
                width: buttonWidth, 
                borderRadius: "18px", 
                marginInline: "auto", 
                transition: "0.1s", 
                ':hover': {
                    filter: "brightness(50%)", 
                    transform: "scale(1.1)", 
                }
            }}>
                <Box sx={{
                    marginLeft: "25%", 
                    color: "#fff", 
                    fontSize: buttonFontSize, 
                    fontWeight: "600", 
                }}>
                    Easy
                </Box>
                <Box sx={{
                    backgroundImage: `url(../../public/easy_difficulty.png)`, 
                    backgroundSize: "100% 100%",
                    width: "35%", 
                    height: "100%" 
                }} />
            </Button>

            <Box sx={{
                position: "relative", 
                width: "100%", 
                height: "4%"
            }}>
                <Box className="line">
                    <Box className="shape"></Box>
                </Box>
            </Box>

            <Button id="mediumMode" onClick={onClick} sx={{
                background: theme.palette.mediumDifficultyButtonColor.main, 
                display: "flex", 
                alignItems: "center",
                width: buttonWidth, 
                borderRadius: "18px", 
                marginInline: "auto", 
                transition: "0.1s", 
                ':hover': {
                    filter: "brightness(50%)", 
                    transform: "scale(1.1)" 
                }
            }}>
                <Box sx={{
                   marginLeft: "16%",
                   marginRight: "2%",  
                   color: "#fff", 
                   fontSize: buttonFontSize, 
                   fontWeight: "600", 
                }}>
                    Medium
                </Box>
                <Box sx={{
                    backgroundImage: `url(../../public/medium_difficulty.png)`, 
                    backgroundSize: "100% 100%",
                    width: "35%", 
                    height: "100%" 
                }} />
            </Button>

            <Box sx={{
                position: "relative", 
                width: "100%", 
                height: "4%"
            }}>
                <Box className="line">
                    <Box className="shape"></Box>
                </Box>
            </Box>

            <Button id="hardMode" onClick={onClick} sx={{
                background:  theme.palette.hardDifficultyButtonColor.main, 
                display: "flex", 
                alignItems: "center",
                width: buttonWidth, 
                borderRadius: "18px", 
                marginInline: "auto", 
                transition: "0.1s", 
                ':hover': {
                    filter: "brightness(50%)", 
                    transform: "scale(1.1)" 
                }
            }}>
               <Box sx={{
                    marginLeft: "25%", 
                    marginRight: "3%", 
                    color: "#fff", 
                    fontSize: buttonFontSize, 
                    fontWeight: "600", 
                }}>
                    Hard
                </Box>
                <Box sx={{
                    backgroundImage: `url(../../public/hard_difficulty.png)`, 
                    backgroundSize: "100% 100%",
                    width: "35%", 
                    height: "100%" 
                }} />
            </Button>
            </Box>
                <Box sx={{
                    width: "100%", 
                    height: "100%", 
                }}>
                    <video autoPlay muted loop style={{width: "100%", height: "100%", objectFit: "fill"}}>
                        <source src={backgroundVideo}/>
                    </video>
                </Box>
                {text}
            </Box>
        </>
    )
}