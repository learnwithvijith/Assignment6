function productOfDigits(num) {
    let product = 1;

    while (num > 0) {
        let digit = num % 10;
        product *= digit; 
        num = Math.floor(num / 10); 
    }

    return product;
}


console.log(productOfDigits(234)); 
console.log(productOfDigits(105)); 
console.log(productOfDigits(7));   
console.log(productOfDigits(1234));