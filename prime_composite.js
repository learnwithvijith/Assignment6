const inputNumber = 7
const result = isPrime(inputNumber);

function isPrime(num) {

    if (num < 2) {
        return 'neither prime nor composite'
    }
    
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return 'composite'
        }
    }
    
    return 'prime'
}


console.log(`The number ${inputNumber} is: ${result}`);
