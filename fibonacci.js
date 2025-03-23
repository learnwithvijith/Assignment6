// 4. Implement a program to display Fibonacci Series (0,1,1,2,3,5,8,.... n).

let n = 10
let a = 0
let b = 1
let next

console.log(a)

for (let i = 1; i <= n; i++) {
    console.log(b)
    next = a + b
    a = b
    b = next
}