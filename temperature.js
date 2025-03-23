

// . Implement a program that converts temperatures between Celsius and Fahrenheit


const temperature = 60;

const  fahrenheitToCelsius = (temperature - 32) * 5/9;

const  celsiusToFahrenheit = (temperature * 9/5)+ 32;


console.log("Temperature in Fahrenheit: " , temperature , "°F");
console.log("Converted to Celsius: " + fahrenheitToCelsius+ "°C");
  
console.log("Temperature in Celsius: " , temperature , "°C");
console.log("Converted to Fahrenheit: " , celsiusToFahrenheit, "°F");