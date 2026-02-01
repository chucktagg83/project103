function convertTemperature() {
    let input = prompt("Enter temperature and scale (e.g., '32C' or '100F'):");

    // input is the variable, brackets say to use input string length -1 to get the last character
    if(input[input.length - 1].toUpperCase() == "C"){
        let temp = input.substr(0, input.length - 1); //Remove the last character
        let fahrenheit = (temp * 9/5) + 32;

        console.log(fahrenheit + " °F");
        document.getElementById("results").innerHTML = "The current Temperature is " + fahrenheit + " °F";
    } else if(input[input.length - 1].toUpperCase() == "F"){
        let temp = input.substr(0, input.length - 1); //Remove the last character
        let celsius = (temp - 32) * 5/9;

        console.log(celsius + " °C");
        document.getElementById("results").innerHTML = "The current Temperature is " + celsius + " °C";
    } else {
        document.getElementById("results").innerHTML = "Invalid input. Please enter temperature followed by 'C' or 'F'.";
    }
}