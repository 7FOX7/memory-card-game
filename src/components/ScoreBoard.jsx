import Box from "@mui/material/Box"; 
import { useMediaQuery } from "@mui/material";
import { theme } from "../styles/style";
import Slide from "@mui/material/Slide";

export const ScoreBoard = ({score, bestScore}) => {
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop')); 
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop')); 

    const scoreAnimation = 
        <Box sx={{background: "red"}}>
            {score}
        </Box>

    const bestScoreAnimation = 
        <Box>
            {bestScore}
        </Box>

    return (
        <>
            {isMobile && (
                <Box sx={{
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
                    color: "#fff"
                }} >
                    <span>your score is: {score}</span>
                    <span>your best score is: {bestScore}</span>
                </Box>
            )}

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