import Box from "@mui/material/Box"

export const MainBody = ({children}) => {
    return (
        <>
            <Box sx={{display: "flex", flexDirection: "column", padding: "7px", alignItems: "center", justifyContent: "space-between", height: "80%", marginTop: "8px"}}> 
                {children}
            </Box>
        </> 
    )
}