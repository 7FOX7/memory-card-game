export default function audioFactory(src) {
    const audio = new Audio(src); 
    audio.volume = 0.2; 
    audio.loop = true; 
    return audio; 
}