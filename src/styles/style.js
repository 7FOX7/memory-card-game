import { createTheme } from "@mui/material";

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 720, 
            laptop: 1500, 
            desktop: 1750
        }
    }, 
    typography: {
        font1: {
            fontFamily: "'Kumbh Sans'"
        }, 
        font2: {
            fontFamily: "'Ga Maamli'"
        }, 
    }
})




