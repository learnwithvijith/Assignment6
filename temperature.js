function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}


let celsius = 25;
let fahrenheit = 77;

console.log(`${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F`);
console.log(`${fahrenheit}°F is equal to ${fahrenheitToCelsius(fahrenheit)}°C`);

