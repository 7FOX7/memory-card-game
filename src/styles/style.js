import { createTheme } from "@mui/material";
import {red, blue} from "@mui/material/colors";

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
        font3: {
            fontFamily: "'Jaini'", 
            fontSize: "2.7em"
        }
    }, 
    palette: {
        roundColor: {
            main: blue[900], 
            secondary: red[700]
        }, 
    }, 
    shadows: {
        scoreBoardShadow: {
            main: "0px 0px 7px 10px #ffde5b"
        }
    }
})




