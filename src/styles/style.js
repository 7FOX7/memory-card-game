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
        scoreBoard_typography: {
            fontFamily: "'Kumbh Sans'"
        }, 
        cardBoard_typography: {
            fontFamily: "'Ga Maamli'"
        }
    }
})




