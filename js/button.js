function getTemperature()
{
    const city = document.getElementById("city-input").value;
    var temp;
    // const temp;
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=23d18f8ee7da3a481d47d75065594755&units=imperial")
        .then(response => response.json())
        .then(json => document.getElementById("temp-output").innerHTML = json.main.temp);
    // console.log(response.json().main.temp);
    //document.getElementById("temp-output").innerHTML = JSON.stringify(temp);
            //.json();
}