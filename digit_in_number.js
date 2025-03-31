// digits in a number

function calculateProduct(n) {
    let digits = n.toString().split("").map(Number);
    let product = digits.reduce((a, b) => a * b, 1);
    return `${digits.join("")}(${digits.join("*")})`;
}

console.log(calculateProduct(234));  
