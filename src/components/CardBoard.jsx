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
                display: "grid", 
                height: "70%", 
                justifyItems: "center", 
                alignItems: "center", 
                overflowY: "scroll", 
                overflowX: "hidden", 
                fontFamily: theme.typography.cardBoard_typography, 
                width: "100%", 
                gridTemplateColumns: "auto auto", 
                paddingBlock: "5px", 
                rowGap: "8px"
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