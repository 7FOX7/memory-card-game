import Box from "@mui/material/Box"
import "../styles/style.css"

export const Header = ({children}) => {
    return (
        <Box className="header">
            {children}
        </Box>
    )
}