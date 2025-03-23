let num = 18

let isPrime = num > 1
for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
        isPrime = false
    }
}

if (num < 2) {
    console.log("error")
} else {
    console.log(num, isPrime ? "is a Prime number" :"is a Composite number")
}
