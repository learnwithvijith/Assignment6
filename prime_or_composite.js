// 3. Implement a program to check whether a number is prime or composite.

let n = 5

if (n === 1) {
    console.log("1 is neither prime nor composite")
}else {
    count = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            count++
        }
    }
    if (count === 2) {
        console.log(n, "is a prime number")
    }else {
        console.log(n, "is a composite number")
    }
}