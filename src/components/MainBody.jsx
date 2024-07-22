import useMediaQuery from "@mui/material/useMediaQuery"; 
import Box from "@mui/material/Box"
import { theme } from "../styles/style";

export const MainBody = ({children}) => {
    const isMobile = useMediaQuery(theme.breakpoints.down('tablet')); 
    const height = isMobile ? "85%" : "90%"; 
    return (
        <>
            <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between", height: `${height}`, marginTop: "1.5%"}}> 
                {children}
            </Box>
        </> 
    )
}