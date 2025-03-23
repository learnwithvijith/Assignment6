
let number = 29;
let isPrime = number > 1;
for (let i = 2; i < number; i++) {
    if (number % i === 0) {
        isPrime = false;
        break;
    }
}
console.log(number, isPrime ? "is Prime" : "is Composite");