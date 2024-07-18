export default function audioFactory(src) {
    const audio = new Audio(src); 
    audio.volume = 0.3; 

    return audio; 
}