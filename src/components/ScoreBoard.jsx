import Box from "@mui/material/Box"; 
import { useMediaQuery } from "@mui/material";
import { theme } from "../styles/style";
import { useMemo } from "react";
import { nanoid } from "nanoid";
import { scoreAnimation, bestScoreAnimation } from "../animations/animations";

export const ScoreBoard = ({score, bestScore}) => {
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop')); 
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop')); 

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

    const scoreBoard = useMemo(() => {
        return <Box key={nanoid(5)} sx={{
            width: "60%", 
            paddingBlock: "15px", 
            paddingInline: "18px", 
            display: "flex", 
            flexDirection: "column", 
            background: "black",
            boxShadow: theme.shadows.scoreBoardShadow.main, 
            borderRadius: "15px", 
            fontSize: "1.15em", 
            fontWeight: "600", 
            fontFamily: theme.typography.font1, 
        }}>
            <Box sx={{display: "flex", alignItems: "center", color: "#fff"}}>
                <Box sx={{marginRight: "auto"}}>
                    Current score:
                </Box> 
                {scoreAnimated}
            </Box>

            <Box sx={{display: "flex", alignItems: "center", color: `${theme.palette.bestScoreColor.main}`}}>
                <Box sx={{marginRight: "auto"}}>
                    Best score: 
                </Box>
                {bestScoreAnimated}
            </Box>
        </Box>
    }, [score])

    return (
        <>
            {isMobile && scoreBoard}

            {isTablet && (
                <Box sx={{
                    padding: "20px", 
                    display: "flex", 
                    flexDirection: "column", 
                    background: "green",
                    boxShadow: theme.shadows.scoreBoardShadow.main, 
                    borderRadius: "15px", 
                    fontSize: "1.35em", 
                    fontWeight: "600", 
                    fontFamily: theme.typography.font1, 
                    color: "#fff"
                }}>
                    <span>your score is: {score}</span>
                    <span>your best score is: {bestScore}</span>
                </Box>
            )}

            {isLaptop && (
                <Box sx={{
                    padding: "20px", 
                    display: "flex", 
                    flexDirection: "column", 
                    background: "green",
                    boxShadow: theme.shadows.scoreBoardShadow.main, 
                    borderRadius: "15px", 
                    fontSize: "1.65em", 
                    fontWeight: "600", 
                    fontFamily: theme.typography.font1, 
                    color: "#fff"
                }}>
                    <span>your score is: {score}</span>
                    <span>your best score is: {bestScore}</span>
                </Box>
            )}

            {isDesktop && (
                <Box sx={{
                    padding: "20px", 
                    display: "flex", 
                    flexDirection: "column", 
                    background: "green",
                    boxShadow: theme.shadows.scoreBoardShadow.main, 
                    borderRadius: "25px", 
                    fontSize: "1.85em", 
                    fontWeight: "600", 
                    fontFamily: theme.typography.font1, 
                    color: "#fff"
                }}>
                    <span>your score is: {score}</span>
                    <span>your best score is: {bestScore}</span>
                </Box>
            )}
        </>
    )      
} 