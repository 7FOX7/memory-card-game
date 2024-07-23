import Box from "@mui/material/Box"; 

export const MainBody = ({children}) => {
    return (
        <>
            <Box sx={{display: "flex", flexDirection: "column", paddingInline: "10px", alignItems: "center", justifyContent: "space-between", height: `80%`, marginTop: "1.5%"}}> 
                {children}
            </Box>
        </> 
    )
}