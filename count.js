// count the number of digits


function countDigits(number) {
    let count = 0;
    while (number !== 0) {
        number = Math.floor(number / 10);
        count++;
    }
    return count;
}

// Example
const number = 98765;
console.log("Number of digits:", countDigits(number));
