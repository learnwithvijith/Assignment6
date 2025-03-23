let n = 12345 , s = 0
while (n!= 0) {
    let r = n % 10
    s += r
    n = Math.floor(n/10)
}
console.log("The sum is:", s)
