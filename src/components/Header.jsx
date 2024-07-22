import { useState } from "react";
import Box from "@mui/material/Box"; 
import AppBar from "@mui/material/AppBar"; 
import Toolbar from "@mui/material/Toolbar"; 
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import { theme } from "../styles/style"; 
import useMediaQuery from "@mui/material/useMediaQuery"; 

export const Header = ({onClick, returnRef}) => {
    const [anchorEl, setAnchorEl] = useState(null); 
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop')); 
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop'));
    
    const open = Boolean(anchorEl); 

    function handleMenuButton(e) {
        setAnchorEl(e.currentTarget); 
    }

    function handleClose() {
        setAnchorEl(null); 
    }

    return (
        <>
            {isMobile && (
                <AppBar position="static" elevation={0} color="transparent">
                    <Toolbar>
                        <IconButton onClick={handleMenuButton} sx={{color: "#fff"}}>
                            <MenuIcon />
                        </IconButton>
                        <Menu 
                            id="header-menu"
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={open}
                            MenuListProps={{sx: {padding: "2px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}}>
                            <MenuItem onClick={handleClose} sx={{padding: "7px"}}>
                            <Box ref={returnRef} onClick={onClick} sx={{
                                cursor: "pointer",
                                height: "37px", 
                                width: "fit-content",
                                border: "3px solid rgb(0, 0, 0)",
                                borderRadius: "50%", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "flex-end", 
                                }}>
                                <HomeOutlinedIcon fontSize="large"/>
                            </Box>
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={{padding: "7px"}}>
                            <Box>
                            <a href="https://github.com/7FOX7">
                                <GitHubIcon fontSize="large" sx={{color: "black"}}/>
                            </a>
                            </Box>
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            )}
            
            {isTablet && (
                 <AppBar position="static" sx={{background: "#c70000"}}>
                    <Toolbar>
                        <IconButton onClick={handleMenuButton} sx={{color: "#fff"}}>
                            <MenuIcon />
                        </IconButton>
                        <Menu 
                            id="header-menu"
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            open={open}
                            MenuListProps={{sx: {padding: "2px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}}>
                            <MenuItem onClick={handleClose} sx={{padding: "7px"}}>
                            <Box ref={returnRef} onClick={onClick} sx={{
                                cursor: "pointer",
                                height: "37px", 
                                width: "fit-content",
                                border: "3px solid rgb(0, 0, 0)",
                                borderRadius: "50%", 
                                display: "flex", 
                                justifyContent: "center", 
                                alignItems: "flex-end", 
                                }}>
                                <HomeOutlinedIcon fontSize="large"/>
                            </Box>
                            </MenuItem>
                            <MenuItem onClick={handleClose} sx={{padding: "7px"}}>
                            <Box>
                            <a href="https://github.com/7FOX7">
                                <GitHubIcon fontSize="large" sx={{color: "black"}}/>
                            </a>
                            </Box>
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            )}

            {(isLaptop || isDesktop) && (
                 <AppBar position="static" sx={{background: "#c70000"}}>
                    <Toolbar>
                        <Box ref={returnRef} onClick={onClick} sx={{
                            cursor: "pointer",
                            height: "37px", 
                            width: "fit-content",
                            border: "3px solid rgb(0, 0, 0)",
                            borderRadius: "50%", 
                            display: "flex", 
                            justifyContent: "center", 
                            alignItems: "center", 
                            background: "#fff"
                            }}>
                            <HomeOutlinedIcon fontSize="large" sx={{color: "rgb(0, 0, 0)"}}/>
                        </Box>   
                        <Box sx={{marginLeft: "20px"}}>
                            <a href="https://github.com/7FOX7">
                                <GitHubIcon fontSize="large" sx={{color: "black"}}/>
                            </a>
                        </Box>
                    </Toolbar>
                </AppBar>
            )}
        </>
    )
}