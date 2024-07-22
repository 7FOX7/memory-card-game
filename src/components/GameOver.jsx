import Box from "@mui/material/Box"; 
import Button from "@mui/material/Button"; 
import Modal from "@mui/material/Modal";
import useMediaQuery from "@mui/material/useMediaQuery"; 
import { theme } from "../styles/style"; 
import {win_background} from "../data/data";
import {lose_background} from "../data/data";

export const GameOver = ({endGame, gameIsLost, onClick}) => {
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop')); 
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop')); 

//#region Mobile styling:
    const mobile__window__winning = (
        <Box sx={{
            paddingBlock: "15px", 
            paddingInline: "25px", 
            position: "absolute", 
            backgroundSize: "100% 100%", 
            backgroundImage: `url(${win_background})`, 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center", 
            display: "flex", 
            left: 0, 
            top: "50%",
            transform: "translate(9%, -50%)",  
            zIndex: 5, 
            alignItems: "center", 
            fontSize: "2em", 
            flexDirection: "column", 
            justifyContent: "space-around", 
            width: "85%", 
            height: "40%", 
            borderRadius: "25px"
        }}>
            <Box sx={{
                padding: "8px",
                display: "flex", 
                justifyContent: "center", 
                width: "90%", 
                background: "#007600", 
                fontFamily: "Bungee", 
                color: "#fff",
                borderRadius: "10px" 
            }}>you win!</Box>

            <Button variant="contained" onClick={onClick} sx={{
                fontWeight: 500, 
                fontSize: "0.6em", 
                background: "#fff", 
                color: "black", 
                ':hover': {
                    background: "#007600"
                }
            }}>Restart</Button>
        </Box>
    )

    const mobile__window__losing = (
        <Box sx={{
            paddingBlock: "15px", 
            paddingInline: "25px", 
            position: "absolute", 
            backgroundSize: "100% 100%", 
            backgroundImage: `url(${lose_background})`, 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat",  
            display: "flex", 
            left: 0, 
            top: "50%",
            transform: "translate(9%, -50%)",  
            zIndex: 5, 
            alignItems: "center", 
            fontSize: "2em", 
            flexDirection: "column", 
            justifyContent: "space-around", 
            width: "85%", 
            height: "40%", 
            borderRadius: "25px"
        }}>
            <Box sx={{
                padding: "8px", 
                display: "flex", 
                justifyContent: "center", 
                width: "90%", 
                background: "#c80000", 
                fontFamily: "Bungee", 
                color: "#fff", 
                borderRadius: "10px"
            }}>you lose!</Box>

            <Button variant="contained" onClick={onClick} sx={{
                fontWeight: 500, 
                fontSize: "0.6em", 
                background: "#fff", 
                color: "black", 
                ':hover': {
                    background: "#c80000"
                }
            }}>Restart</Button>
        </Box>
    )
//#endregion

//#region Laptop styling:
    const laptop__window__winning = (
        <Box sx={{
            paddingBlock: "15px", 
            paddingInline: "25px", 
            position: "absolute", 
            backgroundSize: "100% 100%", 
            backgroundImage: `url(${win_background})`, 
            backgroundRepeat: "no-repeat", 
            backgroundPosition: "center", 
            display: "flex", 
            left: "5%", 
            top: "50%",
            transform: "translate(50%, -50%)",    
            zIndex: 5, 
            alignItems: "center", 
            fontSize: "2em", 
            flexDirection: "column", 
            justifyContent: "space-around", 
            width: "45%", 
            height: "40%", 
            borderRadius: "25px"
        }}>
            <Box sx={{
                padding: "8px",
                display: "flex", 
                justifyContent: "center", 
                width: "60%", 
                background: "#007600", 
                fontFamily: "Bungee", 
                color: "#fff",
                borderRadius: "10px" 
            }}>you win!</Box>

            <Button variant="contained" onClick={onClick} sx={{
                fontWeight: 500, 
                fontSize: "0.6em", 
                background: "#fff", 
                color: "black", 
                ':hover': {
                    background: "#007600"
                }
            }}>Restart</Button>
        </Box>
    )

    const laptop__window__losing = (
        <Box sx={{
            paddingBlock: "15px", 
            paddingInline: "25px", 
            position: "absolute", 
            backgroundSize: "100% 100%", 
            backgroundImage: `url(${lose_background})`, 
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat",  
            display: "flex", 
            left: "5%", 
            top: "50%",
            transform: "translate(50%, -50%)",  
            zIndex: 5, 
            alignItems: "center", 
            fontSize: "2em", 
            flexDirection: "column", 
            justifyContent: "space-around", 
            width: "45%", 
            height: "40%", 
            borderRadius: "25px"
        }}>
            <Box sx={{
                padding: "8px", 
                display: "flex", 
                justifyContent: "center", 
                width: "60%", 
                background: "#c80000", 
                fontFamily: "Bungee", 
                color: "#fff", 
                borderRadius: "10px"
            }}>you lose!</Box>

            <Button variant="contained" onClick={onClick} sx={{
                fontWeight: 500, 
                fontSize: "0.6em", 
                background: "#fff", 
                color: "black", 
                ':hover': {
                    background: "#c80000"
                }
            }}>Restart</Button>
        </Box>
    )
//#endregion 

//#region Tablet styling: 
const tablet__window__winning = (
    <Box sx={{
        paddingBlock: "15px", 
        paddingInline: "25px", 
        position: "absolute", 
        backgroundSize: "100% 100%", 
        backgroundImage: `url(${win_background})`, 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        display: "flex", 
        left: "8%", 
        top: "50%",
        transform: "translate(9%, -50%)",  
        zIndex: 5, 
        alignItems: "center", 
        fontSize: "2em", 
        flexDirection: "column", 
        justifyContent: "space-around", 
        width: "70%", 
        height: "35%", 
        borderRadius: "25px"
    }}>
        <Box sx={{
            padding: "8px",
            display: "flex", 
            justifyContent: "center", 
            width: "60%", 
            background: "#007600", 
            fontFamily: "Bungee", 
            color: "#fff",
            borderRadius: "10px" 
        }}>you win!</Box>

        <Button variant="contained" onClick={onClick} sx={{
            fontWeight: 500, 
            fontSize: "0.6em", 
            background: "#fff", 
            color: "black", 
            ':hover': {
                background: "#007600"
            }
        }}>Restart</Button>
    </Box>
)

const tablet__window__losing = (
    <Box sx={{
        paddingBlock: "15px", 
        paddingInline: "25px", 
        position: "absolute", 
        backgroundSize: "100% 100%", 
        backgroundImage: `url(${lose_background})`, 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",   
        display: "flex", 
        left: "8%", 
        top: "50%",
        transform: "translate(9%, -50%)",  
        zIndex: 5, 
        alignItems: "center", 
        fontSize: "2em", 
        flexDirection: "column", 
        justifyContent: "space-around", 
        width: "70%", 
        height: "35%", 
        borderRadius: "25px"
    }}>
        <Box sx={{
            padding: "8px", 
            display: "flex", 
            justifyContent: "center", 
            width: "60%", 
            background: "#c80000", 
            fontFamily: "Bungee", 
            color: "#fff", 
            borderRadius: "10px"
        }}>you lose!</Box>

        <Button variant="contained" onClick={onClick} sx={{
            fontWeight: 500, 
            fontSize: "0.6em", 
            background: "#fff", 
            color: "black", 
            ':hover': {
                background: "#c80000"
            }
        }}>Restart</Button>
    </Box>
)
//#endregion

//#region Desktop styling: 
const desktop__window__winning = (
    <Box sx={{
        paddingBlock: "15px", 
        paddingInline: "25px", 
        position: "absolute", 
        backgroundSize: "100% 100%", 
        backgroundImage: `url(${win_background})`, 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "center", 
        display: "flex", 
        left: "15%", 
        top: "50%",
        transform: "translate(50%, -50%)",    
        zIndex: 5, 
        alignItems: "center", 
        fontSize: "2em", 
        flexDirection: "column", 
        justifyContent: "space-around", 
        width: "35%", 
        height: "43%", 
        borderRadius: "25px"
    }}>
        <Box sx={{
            padding: "8px",
            display: "flex", 
            justifyContent: "center", 
            width: "60%", 
            background: "#007600", 
            fontFamily: "Bungee", 
            color: "#fff",
            borderRadius: "10px" 
        }}>you win!</Box>

        <Button variant="contained" onClick={onClick} sx={{
            fontWeight: 500, 
            fontSize: "0.6em", 
            background: "#fff", 
            color: "black", 
            ':hover': {
                background: "#007600"
            }
        }}>Restart</Button>
    </Box>
)

const desktop__window__losing = (
    <Box sx={{
        paddingBlock: "15px", 
        paddingInline: "25px", 
        position: "absolute", 
        backgroundSize: "100% 100%", 
        backgroundImage: `url(${lose_background})`, 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat",  
        display: "flex", 
        left: "15%", 
        top: "50%",
        transform: "translate(50%, -50%)",  
        zIndex: 5, 
        alignItems: "center", 
        fontSize: "2em", 
        flexDirection: "column", 
        justifyContent: "space-around", 
        width: "35%", 
        height: "43%", 
        borderRadius: "25px"
    }}>
        <Box sx={{
            padding: "8px", 
            display: "flex", 
            justifyContent: "center", 
            width: "60%", 
            background: "#c80000", 
            fontFamily: "Bungee", 
            color: "#fff", 
            borderRadius: "10px"
        }}>you lose!</Box>

        <Button variant="contained" onClick={onClick} sx={{
            fontWeight: 500, 
            fontSize: "0.6em", 
            background: "#fff", 
            color: "black", 
            ':hover': {
                background: "#c80000"
            }
        }}>Restart</Button>
    </Box>
)
//#endregion

    if(endGame) {
        return (
            <>
            {isMobile && (
                <Modal open={endGame}>  
                    {gameIsLost ? mobile__window__losing : mobile__window__winning}
                </Modal>
            )}

            {isTablet && (
                <Modal open={endGame}>  
                    {gameIsLost ? tablet__window__losing : tablet__window__winning}
                </Modal>
            )}

            {isLaptop && (
                <Modal open={endGame}>  
                    {gameIsLost ? laptop__window__losing : laptop__window__winning}
                </Modal>
            )}

            {isDesktop && (
                <Modal open={endGame}>  
                    {gameIsLost ? desktop__window__losing : desktop__window__winning}
                </Modal>
            )}
            </>
        )
    }
} 