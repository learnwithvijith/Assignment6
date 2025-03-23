let str = "Roopa Thomas";  
str = str.toLowerCase();  

let vowels = 0;  
let consonants = 0;  

for (let i = 0; i < str.length; i++) {  
    let letter = str[i];  
    
    if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        vowels++;
    } 
    
    else if (letter >= "a" && letter <= "z") {  
        consonants++;
    }
}

console.log("Vowels", vowels);
console.log("Consonants", consonants);
