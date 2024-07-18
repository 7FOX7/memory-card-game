import Box from "@mui/material/Box"; 
import { theme } from "../styles/style"; 
import { useMediaQuery } from "@mui/material"; 

export const CardBoard = ({children}) => {
    const isMobile = useMediaQuery(theme.breakpoints.between('mobile', 'tablet')); 
    const isTablet = useMediaQuery(theme.breakpoints.between('tablet', 'laptop')); 
    const isLaptop = useMediaQuery(theme.breakpoints.between('laptop', 'desktop'));
    const isDesktop = useMediaQuery(theme.breakpoints.up('desktop')); 


    return (
        <>  
            {isMobile && (
            <Box sx={{
                padding: "8px", 
                display: "grid",  
                overflow: "scroll", 
                fontFamily: theme.typography.cardBoard_typography, 
                width: "100%", 
                height: "65%", 
                gridTemplateColumns: "auto auto", 
                rowGap: "5px"
            }}>
                {children}
            </Box>
            )}

            {isTablet && (
                <Box >
                    {children}
                </Box>
            )}

            {isLaptop && (
                <Box >
                    {children}
                </Box>
            )}

            {isDesktop && (
                <Box >
                    {children}
                </Box>
            )}
        </>
    )
}