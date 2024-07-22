
import { createTheme } from "@mui/material";
import {red, blue, pink, orange} from "@mui/material/colors";

export const theme = createTheme({
    breakpoints: {
        values: {
            mobile: 0,
            tablet: 700, 
            laptop: 1330, 
            desktop: 1650
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
        }
    }, 
    palette: {
        roundColor: {
            main: blue[900], 
            secondary: red[700]
        }, 
        bestScoreColor: {
            main: red[800]
        }, 
        easyDifficultyButtonColor: {
            main: pink[400]
        }, 
        mediumDifficultyButtonColor: {
            main: orange[600]
        }, 
        hardDifficultyButtonColor: {
            main: "rgb(80, 80, 80)"
        }
    }, 
    shadows: {
        scoreBoardShadow: {
            main: "0px 0px 7px 10px #ffde5b"
        }
    }
})