import Box from "@mui/material/Box"
import { theme } from "../styles/style"
import { useMediaQuery } from "@mui/material"

export const Header = ({children}) => {
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop')); 
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop')); 

    return (
        <>
            {isMobile && (
                <Box component="header" sx={{
                    background: "blue", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    marginBottom: "10px"
                }}>
                    {children}
                </Box>
            )}
            
            {isTablet && (
                <Box component="header" sx={{
                    background: "blue", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    marginBottom: "10px"
                }}>
                    {children}
                </Box>
            )}

            {isLaptop && (
                <Box component="header" sx={{
                    background: "blue", 
                    display: "flex", 
                    justifyContent: "space-between", 
                    marginBottom: "20px"
                }}>
                    {children}
                </Box>
            )}

            {isDesktop && (
                <Box component="header" sx={{
                    background: "blue", 
                    display: "flex", 
                    justifyContent: "space-between",
                    marginBottom: "20px"
                }}>
                    {children}
                </Box>
            )}
        </>
    )
}