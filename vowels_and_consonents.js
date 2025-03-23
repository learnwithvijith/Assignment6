// 10.implement a program to find the number of vowels and consonents in a string.

let str = "Hello World"
let vowels = 0
let consonents = 0

for (let i = 0; i < str.length; i++) {
    if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
        vowels++
    }else {
        consonents++
    }
}
console.log("Vowels:", vowels)
console.log("Consonents:", consonents)