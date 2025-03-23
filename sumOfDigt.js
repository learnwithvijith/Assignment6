

// Implement a program to find the sum of digits of a number 

let num = 32;

let str = num.toString();
// console.log(str)
// console.log(typeof(str))
let sum = 0
let i = 0

for (i; i < str.length ; i++){
    // console.log(str[i])
    sum += parseInt(str[i])
}
console.log(sum)