function sumOfDigits(n) {
    let sum = 0;
    while (n) {
        digit = n % 10;
        sum += digit;
        n =(n-digit)/10;
    }
    return sum;
}

sumOfDigits(546);

