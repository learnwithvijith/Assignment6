// 2. Implement a program that calculates the factorial of a given number n.

let n = 5
let fact = 1

for (let i = 1; i <= n; i++) {
    fact*=i
}
console.log("The factorial of", n, "is", fact)