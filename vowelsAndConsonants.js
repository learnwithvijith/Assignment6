// implement a program to find the number of vowels and consonents in a string
let str = "hello world";
let vowels = "aeiouAEIOU";
let vowelCount = 0, consonantCount = 0;
for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (vowels.includes(ch)) {
        vowelCount++;
    } else if (ch >= 'a' && ch <= 'z' || ch >= 'A' && ch <= 'Z') {
        consonantCount++;
    }
}
console.log("Vowels:", vowelCount, "Consonants:", consonantCount);