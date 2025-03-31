function reverseWords(sentence) {
    
    let words = sentence.trim().split(/\s+/);
    
    
    let reversedSentence = words.reverse().join(" ");

    return reversedSentence;
}


console.log(reverseWords("JavaScript is fun"));  

console.log(reverseWords("Hello world"));        
console.log(reverseWords("  This is a test  "));

console.log(reverseWords("One Two Three Four"));
console.log(reverseWords(""));                  