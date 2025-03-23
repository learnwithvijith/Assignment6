let n = 1 , f = 0
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        f++
    }
}
if (f == 2) {
    console.log(n+ " is a prime number")
} else if (f == 1) {
    console.log(n+ " is not a prime number as well as composite number")
} else {
    console.log(n+ " is a composite number")
}
