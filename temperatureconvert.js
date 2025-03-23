let temp = 100
let unit = 'F'

let convertedTemp
let convertedUnit

if(unit==='C'){
    convertTemp = (temp * 9/5 + 32)
    convertedUnit = 'F'

}else if(unit==='F'){
    convertedTemp=(temp-32)*5/9
    convertedUnit='C'
}else{
    console.log('error')
}
console.log(temp + "°" + unit + " is " + convertedTemp + "°" + convertedUnit)

