import Box from "@mui/material/Box"
import useMediaQuery from "@mui/material/useMediaQuery"
import { theme } from "../styles/style"

export const Board = ({children}) => {
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    // const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop')); 
    // const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop')); 
    // const isDesktop = useMediaQuery(theme.breakpoints.up('desktop')); 

    return (
        <>
            <Box sx={{
                width: "100vw",
                height: "100vh",
                background: "red", 
                padding: "10px", 
                display: "flex", 
                flexDirection: "column", 
            }}>
            {children}
            </Box>
        </>
    )
}