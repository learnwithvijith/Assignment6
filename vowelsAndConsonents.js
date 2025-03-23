
//.implement a program to find the number of vowels and consonents in a string


let string = "happy"; 
let vowels = "aeiouAEIOU";
let vowelCount = 0;
let consonantCount = 0;

for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (vowels.includes(char)) {
        vowelCount++;
    } else if (char >='a' && char <='z' || char >='A' && char <= 'Z') {
        consonantCount++;
    } 
}
console.log("your word",string)
console.log("Vowels:", vowelCount);
console.log("Consonants:", consonantCount);