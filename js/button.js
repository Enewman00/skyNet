//weather types
//"clear sky" - "Clear"
//"broken clouds" - "Clouds"
//"overcast clouds" - "Clouds"
//


//background image pseudocode (https://openweathermap.org/weather-conditions)
//if it begins with 2xx - thunderstorm
// if it begins with 3xx - drizzle
// 5xx - rain
// 6xx - snow
// 7xx - atmosphere
// 800 - clear
// 80x - clouds
function getTemperature()
{
    const city = document.getElementById("city-input").value;
    var temp;

    //set text of the city entered
    document.getElementById("location").innerHTML = city + "";

    //set background image
    document.getElementById("squareOne").style.backgroundImage = "url('pictures/clouds.jpg')";

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=23d18f8ee7da3a481d47d75065594755&units=imperial")
        .then(response => response.json())
        .then(json => document.getElementById("temperatureId").innerHTML = parseInt(json.main.temp) + "&#176"); //degree symbol

    // console.log(response.json().main.temp);
    //document.getElementById("temp-output").innerHTML = JSON.stringify(temp);
            //.json();
    animateButton();
}

function animateButton()
{
    document.getElementById('squareOne').className = 'classname';
}