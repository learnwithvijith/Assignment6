let n = 17;
let isPrime = true;

if (n <= 1) {
    isPrime = false;
    console.log(isPrime)
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            isPrime = false;
        
        }
    }
}

console.log(isPrime)
