// Implement a program to find the sum of digits of a number

let num2 = 1234;
let sum = 0;
while (num2 > 0) {
    sum += num2 % 10;
    num2 = Math.floor(num2 / 10);
}
console.log("Sum of digits:", sum);
