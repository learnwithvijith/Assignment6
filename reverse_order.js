// reverse order

function reverseWords(str) {
    return str.split(" ").reverse().join(" ")
}
let str = "javascript is fun"
console.log('Reversed words' , reverseWords(str))

