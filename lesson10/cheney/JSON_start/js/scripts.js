//ADD the key and change units to imperial
const apiURL = "//api.openweathermap.org/data/2.5/weather?zip=84065,us&appid=f7dae4438c31f3b6c7876be35f7a832c&units=imperial"

//Go fetch it and then wait for a response.
fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    //Once it comes back, display it to the console.
    console.log(weatherinfo);
    
    document.getElementById('place').innerHTML=weatherinfo.name;
    document.getElementById('currentTemp').innerHTML=weatherinfo.main.temp;
    document.getElementById('windSpeed').innerHTML=weatherinfo.wind.speed;

    const iconcode = weatherinfo.weather[0].icon;
    console.log(iconcode);

    const icon_path = "//openweathermap.org/img/w/"+ iconcode +".png";
    console.log(icon_path);

    document.getElementById('weather_icon').src = icon_path;
 }); //end of "then" fat arrow function



