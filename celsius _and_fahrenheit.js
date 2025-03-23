function celsiusFahrenheit(temp){
    let tempGiven = temp;
    /** to convert temp to celsius */
    let celsius = (temp - 32) * 5 / 9;
    /** to convert temp to fahrenheit */
    let fahrenheit = temp * 9 / 5 + 32;

    console.log("Given temparature:" ,tempGiven);
    console.log("celsius: " ,celsius);
    console.log("fahrenheit: " ,fahrenheit);
}

celsiusFahrenheit(60);
