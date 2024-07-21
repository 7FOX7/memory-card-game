import {keyframes} from "@mui/material";

export const scoreAnimation = keyframes `
    0% {
        -webkit-transform: rotateY(0) rotateX(70deg);
                transform: rotateY(0) rotateX(70deg);
        -webkit-transform-origin: right;
                transform-origin: right;
    }

    100% {
        -webkit-transform: rotateY(-360deg);
                transform: rotateY(-360deg);
        -webkit-transform-origin: right;
                transform-origin: right;
    }
`

export const bestScoreAnimation = keyframes `
    0% {
        letter-spacing: -0.5em;
        -webkit-transform: translateZ(-700px);
            transform: translateZ(-700px);
        opacity: 0;
    }
        
    100% {
        -webkit-transform: translateZ(0);
            transform: translateZ(0);
        opacity: 1;
    }
`

export const showTextAnimation = keyframes `
    0% {
        opacity: 0; 
        -webkit-filter: blur(12px);
            filter: blur(12px);
    }

    100% {
        opacity: 1; 
        -webkit-filter: blur(0.01);
            filter: blur(0.01);
    }
`

export const hideTextAnimation = keyframes `
    0% {
        opacity: 1; 
        -webkit-filter: blur(0.01);
            filter: blur(0.01);
    }

    100% {
        opacity: 0; 
        -webkit-filter: blur(12px);
            filter: blur(12px);
    }
`