import Box from "@mui/material/Box"; 
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect } from "react"; 
import { useState } from "react"; 
import { theme } from "../styles/style";
import { useMemo } from "react";
import { nanoid } from "nanoid";
import { scoreAnimation, bestScoreAnimation } from "../animations/animations";

export const ScoreBoard = ({score, bestScore, screenWidth}) => { 
    const [containerWidth, setContainerWidth] = useState(null); 
    const [fontSize, setFontSize] = useState(null); 
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop')); 
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop')); 

    useEffect(() => {
        if(isMobile) {
            setContainerWidth("55%"); 
            setFontSize("1.15rem"); 
        }   
        else if(isTablet) {
            setContainerWidth("30%"); 
            setFontSize("1.4rem"); 
        }
        else if(isLaptop || isDesktop) {
            setContainerWidth("16%"); 
            setFontSize("1.15rem"); 
        }
    }, [screenWidth])

    const scoreAnimated = 
        <Box sx={{
            width: "fit-content", 
            WebkitAnimation:  `${scoreAnimation} 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000) both`, 
	        animation: `${scoreAnimation} 0.8s cubic-bezier(0.645, 0.045, 0.355, 1.000) both`}}>
            {score}
        </Box>

    const bestScoreAnimated = 
        <Box sx={{
            width: "fit-content", 
            WebkitAnimation:  `${bestScoreAnimation} 1.2s`, 
            animation: `${bestScoreAnimation} 1.2s`}}>
            {bestScore}
        </Box>

    const scores = useMemo(() => {
        return (
            <>
                <Box key={nanoid(6)} sx={{display: "flex", alignItems: "center", color: "#fff"}}>
                    <Box sx={{marginRight: "auto"}}>
                        Current score:
                    </Box> 
                    {scoreAnimated}
                </Box>

                <Box key={nanoid(6)} sx={{display: "flex", alignItems: "center", color: `${theme.palette.bestScoreColor.main}`}}>
                    <Box sx={{marginRight: "auto"}}>
                        Best score: 
                    </Box>
                    {bestScoreAnimated}
                </Box>
            </>
        )
    }, [score])

    const scoreBoard = (
        <Box sx={{
            width: containerWidth, 
            paddingBlock: "15px", 
            paddingInline: "18px", 
            display: "flex", 
            flexDirection: "column", 
            background: "black",
            boxShadow: theme.shadows.scoreBoardShadow.main, 
            borderRadius: "15px", 
            fontSize: fontSize, 
            fontWeight: "600", 
            fontFamily: theme.typography.font1, 

        }}>
            {scores}
        </Box>
    )
        
    return (
        <>
           {scoreBoard}
        </>
    )      
} 