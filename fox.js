function isPangram(sentence) {
    
    let cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, "");
    
    
    let uniqueLetters = new Set(cleanedSentence);
    
   
    return uniqueLetters.size === 26 ? "It is a pangram" : "It is not a pangram";
}


console.log(isPangram("The quick brown fox jumps over the lazy dog")); 

console.log(isPangram("Hello world")); 

console.log(isPangram("Pack my box with five dozen liquor jugs")); 


console.log(isPangram("abcdefghijklmnopqrstuvwxyz")); 

console.log(isPangram("Missing some letters")); 