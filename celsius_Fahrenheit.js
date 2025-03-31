
const celsius = 35
const fahrenheit = 77


// Convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32
}

// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9
}

console.log(`after converted ${celsius}°C is equal to ${celsiusToFahrenheit(celsius)}°F`)
console.log(`after converted ${fahrenheit}°F is equal to ${fahrenheitToCelsius(fahrenheit)}°C`)
