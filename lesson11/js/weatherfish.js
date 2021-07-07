const mydate = new Date();
const daynum = mydate.getDay();

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";


const apiURL = "//api.openweathermap.org/data/2.5/forecast?zip=83287&appid=f7dae4438c31f3b6c7876be35f7a832c&units=imperial"

fetch(apiURL)
  .then((response) => response.json())
  .then((weatherinfo) => {
    console.log(weatherinfo);

    const todaynumber = mydate.getDay();

    let mylist = weatherinfo.list;
    let forecastday = todaynumber;

    for (i=0; i< mylist.length; i++) {
      let time = mylist[i].dt_txt;
          if (time.includes('21:00:00')) {
      
              forecastday += 1;
              if (forecastday === 7) {forecastday = 0;}
      
              let dayname = document.createElement("span")
              dayname.textContent=weekday[forecastday];
      
              let temp = document.createElement("p");
              temp.textContent = weatherinfo.list[i].main.temp + "\xB0";
      
              let iconcode = weatherinfo.list[i].weather[0].icon;
              let iconpath = "http://openweathermap.org/img/w/" + iconcode + ".png";
              let theicon = document.createElement("img");
              theicon.src=iconpath;
      
              let theday = document.createElement("div");
              theday.appendChild(dayname);
              theday.appendChild(temp);
              theday.appendChild(theicon);
      
          document.getElementById('forecast').appendChild(theday);
          }
      }
  });




  const eventURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

  fetch(eventURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      //console.table(jsonObject); FOR TESTING
      const towns = jsonObject['towns'];
  
      //for (let i = 0; i < towns.length; i++ ) {
  
      for (let i = 0; i < towns.length; i++ ) {
          if (i == 2){
        let twninfo = document.createElement('section');
        let info = document.createElement('p');
  
        info.textContent = towns[i].events;
  
        twninfo.appendChild(info);
  
        document.querySelector('div.twnevent').appendChild(twninfo);
      }
      }
  
    });



