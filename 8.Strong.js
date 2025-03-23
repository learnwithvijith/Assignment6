let n = 145, s = 0, a = n
while (n > 0) {
    let d = n % 10
    let f = 1
    for (let i = 1; i <= d; i++) {
        f *= i
    }
    s += f;
    n = Math.floor(n / 10)
}

if (s === a) {
    console.log(a+" is a Strong number")
}
else {
    console.log(a+" is not a Strong number")
}
