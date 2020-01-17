//weather types
//"clear sky" - "Clear"
//"broken clouds" - "Clouds"
//"overcast clouds" - "Clouds"
//

//https://www.pexels.com/search/videos/weather/
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
    document.getElementById("city-input").value = "";
    var temp;
    var videoTitle = "";


    //api call for city and 
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=23d18f8ee7da3a481d47d75065594755&units=imperial")
    .then(response => response.json())
    .then(json => {
        console.log(json);
        //set the temperature to whatever the temp is 
        document.getElementById("temperatureId").innerHTML = parseInt(json.main.temp) + "&#176"; //degree symbol
        //set city to the city in the json
        document.getElementById("location").innerHTML = json.name;
        
        //get the id of the weather
        const id = json.weather[0].id;
        //seperate digits for easy code reading and video selection
        const firstDigit = Math.floor((id / 100) % 10);
        const thirdDigit = Math.floor((id / 1) % 10);

        //find out if the sun is up by the time, sunrise and sunset
        var isDay = isSun(json.dt, json.sys.sunrise, json.sys.sunset);

        //set humidity, wind speed, feels like
        document.getElementById("feels-like").innerHTML = "Feels Like: " + parseInt(json.main.feels_like) + "&#176";
        document.getElementById("humidity").innerHTML = "Humidity: " + parseInt(json.main.humidity) + "%";
        document.getElementById("wind-speed").innerHTML = "Wind Speed: " + parseInt(json.wind.speed) + "mph";

        //set an empty video title, append "n" if night, "d" if day (skip fo thunderstorms)
        if (isDay && firstDigit != 2)
        {
            videoTitle += "d"; 
        }
        else if (firstDigit != 2)
        {
            videoTitle += "n";
        }



        //get rest of videoTitle based on ID
        //special title for drizzle, 
        if (firstDigit != 8 && firstDigit != 7)
        {
            videoTitle += (firstDigit + "00");
        }
        //atmosphere conditions - set to partly cloudy by default
        else if (firstDigit == 7)
        {
            videoTitle += "804";
        }
        //different amounts of clouds
        else
        {
            //clear
            if (thirdDigit == 0)
            {
                videoTitle += "800";
            }
            else if (isDay && [1,2,3].includes(thirdDigit))
            {
                videoTitle += "802";
            }
            else
            {
                videoTitle += "804";
            }
            console.log("videoTitle: " + videoTitle);
        }
    })
    .then(function() {
        document.getElementById("video-src").src = "videos/" + videoTitle + ".mp4";
        document.getElementById("background-vid").load();
        //set background video
    })
    .catch(function() {
        document.getElementById("location").innerHTML = "City not found"; //degree symbol
        //set city to the city in the json
        document.getElementById("temperatureId").innerHTML = ":(";
        document.getElementById("video-src").src = "videos/d300.mp4";
        document.getElementById("background-vid").load();
    });
    
    

    
    // console.g(response.json().main.temp);
    //document.getElementById("temp-output").innerHTML = JSON.stringify(temp);
            //.json();
            
    // document.getElementById("lightning-vid").className = "fullscreen-vid__playing";
    // myVid.width = 180;
    // myVid.height = 230;


}

//gets if the sun is up based on time-sunset is positive or time-sunrise is negative
function isSun(time, sunrise, sunset)
{
    //if later than sunset, return false
    if (time - sunset > 0 || time-sunrise < 0)
    {
        return false;
    }
    return true;
}

