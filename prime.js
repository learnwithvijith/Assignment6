let n = 13 ;
let isPrime = true

if (n < 2) {
    console.log(n + " not a prime number")
} else {
    for (let i = 2; i < n; i++) {

        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(n + " is a prime number");

    } else {
        console.log(n + " is not a prime number")
    }
}

