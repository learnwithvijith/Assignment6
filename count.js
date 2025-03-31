function counting(num) {
    return String(num).split('').reduce(
        (count, digit) => count + 1, 0);
}

let num1 = 98765;
let result1 = counting(num1);

console.log("Number of digits in " + num1 + ": " + result1);
