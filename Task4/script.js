function convertTemperature() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const unitSelector = document.getElementById('unitSelector').value;
    const result = document.getElementById('result');
    
    if (temperatureInput === '') {
        result.textContent = 'Please enter a temperature.';
        return;
    }

    const temp = parseFloat(temperatureInput);
    let convertedTemp;
    
    if (unitSelector === 'C') {
        // Celsius to Fahrenheit
        convertedTemp = (temp * 9/5) + 32;
        result.textContent = `${temp}°C is ${convertedTemp.toFixed(2)}°F`;
    } else if (unitSelector === 'F') {
        // Fahrenheit to Celsius
        convertedTemp = (temp - 32) * 5/9;
        result.textContent = `${temp}°F is ${convertedTemp.toFixed(2)}°C`;
    }
}
