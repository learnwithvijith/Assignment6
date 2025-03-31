function countWords(sentence) {
   
    let words = sentence.trim().split(/\s+/);
    return words.length;
}


console.log(countWords("Hello world, how are you?")); 
console.log(countWords("This is a test."));          
console.log(countWords(" One   two three "));        
console.log(countWords(""));                         