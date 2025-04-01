function convertTemperature() {
    let choice = prompt("Enter 'C' to convert Celsius to Fahrenheit or 'F' to convert Fahrenheit to Celsius: ").toUpperCase();
    if (choice === 'C') {
        let celsius = parseFloat(prompt("Enter temperature in Celsius: "));
        let fahrenheit = (celsius * 9/5) + 32;
        console.log(`${celsius}°C is equal to ${fahrenheit}°F`);
    } else if (choice === 'F') {
        let fahrenheit = parseFloat(prompt("Enter temperature in Fahrenheit: "));
        let celsius = (fahrenheit - 32) * 5/9;
        console.log(`${fahrenheit}°F is equal to ${celsius}°C`);
    } else {
        console.log("Invalid choice");
    }
}

convertTemperature();
