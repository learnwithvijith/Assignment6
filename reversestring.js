let string = "hello"
let reversedString= ""

let i = string.length
while (i > 0) {
    i-- 
    reversedString += string[i]
    reversedString
}

console.log("Original", string)
console.log("Reversed", reversedString)