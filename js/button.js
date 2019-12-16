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
    var temp;

    //set text of the city entered
    document.getElementById("location").innerHTML = city + "";

    //set background image
    //document.getElementById("squareOne").style.backgroundImage = "url('pictures/clouds.jpg')";
    //document.getElementById("video-src").src = "pictures/lightning1.mp4"
    
    
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city + "&APPID=23d18f8ee7da3a481d47d75065594755&units=imperial")
        .then(response => response.json())
        .then(json => document.getElementById("temperatureId").innerHTML = parseInt(json.main.temp) + "&#176"); //degree symbol

    // console.log(response.json().main.temp);
    //document.getElementById("temp-output").innerHTML = JSON.stringify(temp);
            //.json();

    document.getElementById("lightning-vid").className = "fullscreen-vid__playing";
    // myVid.width = 180;
    // myVid.height = 230;
    animateButton();



}


function testButton()
{

    //get all elements with class "weather-square" - within there going to get more elements
    //loop and create all different weathers
    //1 set .innerHTML of class "city" elements to "City " + i
    //2 set .innerHTL of class "temp" elements to a random number from 15 - 99
    //3 set className of class "fullscreen_vid__video" to "fullscreen_vid__playing"
    //4 set src of class "src-class" to "videos/" + i + ".mp4"
    //5 load video from #3 document.getElementById("lightning-vid").load();

    
    var squares = document.getElementsByClassName("weather-square");
    var cities = document.getElementsByClassName("city");
    var temperatures = document.getElementsByClassName("temp");
    var videos = document.getElementsByClassName("fullscreen-vid__video");
    var sources = document.getElementsByClassName("src-class");

    var i = 0;
    // while (videos.length > 0)
    while (i < 4)
    {
        console.log(videos.length);
        console.log(i);
        //1 set .innerHTML of class "city" elements to "City " + i
        cities[i].innerHTML = "City " + i;

        //2 set .innerHTL of class "temp" elements to a random number from 15 - 99
        //temperatures[i].innerHTML = (Math.floor(Math.random() * (99 - 15) + 15) + minimum )+ "&#176";
        temperatures[i].innerHTML = "58&#176";

        //3 set className of class "fullscreen_vid__video" to "fullscreen_vid__playing"
        
        //4 set src of class "src-class" to "videos/" + i + ".mp4"
        sources[i].src = "videos/" + i + ".mp4";
        
        //5 load video from #3 document.getElementById("lightning-vid").load();
        videos[0].load();
        videos[0].className = "fullscreen-vid__playing";
        i++;
    }


    // document.getElementById("location").innerHTML = city + "";
    // document.getElementById("temperatureId").innerHTML = "39&#176";
    // document.getElementById("lightning-vid").className = "fullscreen-vid__playing";
    
    
    // document.getElementById("video-src").src = "pictures/drizzleday.mp4";
    // document.getElementById("lightning-vid").load();
    // myVid.width = 180;
    // myVid.height = 230;
    //animateButton();
}

function animateButton()
{
    document.getElementById('squareOne').className = 'classname';
}