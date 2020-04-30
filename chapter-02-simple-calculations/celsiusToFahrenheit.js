function calcCelsiusToFahrenheit([celsius]) {
    celsius = Number(celsius);
    let fahrenheit = (celsius * (9 / 5) + 32);
    fahrenheit = fahrenheit.toFixed(2);
    console.log(fahrenheit);
}

calcCelsiusToFahrenheit([-5.5]);
// (0°C × 9/5) + 32 = 32°F
