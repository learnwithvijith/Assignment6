
let temp = 105, unit = "C" , cal
switch (unit) {
    case "C":
        cal = (temp - 32) * 5 / 9
        cal = cal + " C"
        break
    case "F":
        cal = (temp * 9 / 5) + 32
        cal = cal + " F"
        break
    default:
        cal = "Error"
}
console.log("The temperature is: ", cal)
