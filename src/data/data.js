import { nanoid } from "nanoid"

export const initialCards = [
    {
        id: nanoid(8), 
        content: "Sample content 1", 
        isFlipped: true
    }, 

    {
        id: nanoid(8), 
        content: "Sample content 2", 
        isFlipped: true
    }, 

    {
        id: nanoid(8), 
        content: "Sample content 3", 
        isFlipped: true
    }, 

    {
        id: nanoid(8), 
        content: "Sample content 4", 
        isFlipped: true
    }, 

    {
        id: nanoid(8), 
        content: "Sample content 5", 
        isFlipped: true
    }, 

    {
        id: nanoid(8), 
        content: "Sample content 6", 
        isFlipped: true
    }, 

    {
        id: nanoid(8), 
        content: "Sample content 7",
        isFlipped: true
    }, 

    {
        id: nanoid(8), 
        content: "Sample content 8", 
        isFlipped: true
    }, 

    {
        id: nanoid(8), 
        content: "Sample content 9", 
        isFlipped: true
    }, 
    
    {
        id: nanoid(8), 
        content: "Sample content 10", 
        isFlipped: true
    }
]

export const API = "AIzaSyB7dk_40cwVc8CZsm1ugDKlEler0aj3KpM"; 
export const channelId = "UCIak6JLVOjqhStxrL1Lcytw"; 

export const fetchUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&id=k04tX2fvh0o&key=${API}`