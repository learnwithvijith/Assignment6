let n = 10, a = 0, b = 1
console.log("Fibonacci Series:")
for (let i = 0; i < n; i++) {
    console.log(a)
    let c = a + b
    a = b
    b = c
}