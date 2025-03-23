// 6. Implement a program that converts temperatures between Celsius and Fahrenheit.

let tem = 25
let type = "F"

if (type === "C") {
    let f = (tem * 9/5) + 32
    console.log(tem, "C is equal to", f, "F")
}else {
    let c = (tem - 32) * 5/9
    console.log(tem, "F is equal to", c, "C")
}