import { useState } from "react";
import Box from "@mui/material/Box"; 
import AppBar from "@mui/material/AppBar"; 
import Toolbar from "@mui/material/Toolbar"; 
import MenuIcon from '@mui/icons-material/Menu';
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import { theme } from "../styles/style"; 
import { useMediaQuery } from "@mui/material"; 


export const Header = ({children}) => {
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
                            MenuListProps={{sx: {padding: "2px"}}}>
                            <MenuItem onClick={handleClose} sx={{padding: "7px"}}>
                                {children}
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
                            MenuListProps={{sx: {padding: "2px"}}}>
                            <MenuItem onClick={handleClose} sx={{padding: "7px"}}>
                                {children}
                            </MenuItem>
                        </Menu>
                    </Toolbar>
                </AppBar>
            )}

            {isLaptop && (
                <Box component="header" sx={{
                    background: "blue", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    marginBottom: "10px"
                }}>
                    {children}
                </Box>
            )}

            {isDesktop && (
                <Box component="header" sx={{
                    background: "blue", 
                    display: "flex", 
                    justifyContent: "space-between",
                    marginBottom: "10px"
                }}>
                    {children}
                </Box>
            )}
        </>
    )
}