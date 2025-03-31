
function celsiusToFahrenheit(celsius) {
    
    let fahrenheit = (celsius * 9 / 5) + 32;

    return fahrenheit;
}

function fahrenheitToCelsius(fahrenheit) {

    let celsius = (fahrenheit - 32) * 5 / 9;

    return celsius;
}


console.log("25°C to Fahrenheit:", celsiusToFahrenheit(25));


console.log("77°F to Celsius:", fahrenheitToCelsius(77)); 