export default function getRandomCard(arr, sourceArray) {
    const randomCard = sourceArray[Math.floor(Math.random() * sourceArray.length)]; 
    if(!arr.includes(randomCard)) {
      return randomCard; 
    } 
    return getRandomCard(arr, sourceArray)
}
  