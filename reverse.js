// 8.Implement a program to reverse a string.

let str = "Hello World"
let rev = ""

for (let i = 0; i < str.length; i++) {
    rev = str[i] + rev
}
console.log(rev)