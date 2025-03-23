


function sumOfDigits(number) {
    const digits = number.toString().split('');

    const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

    return sum;
}

const number = 12345;
console.log("Sum of digits:", sumOfDigits(number)); 
