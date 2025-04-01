function isPrime(n) {
    if (n <= 1) return "Neither prime nor composite";
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return "Composite";
    }
    return "Prime";
}

let number = parseInt(prompt("Enter a number: "));
console.log(isPrime(number));
