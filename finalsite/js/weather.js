//Open and close menu in small view
function togglemenu() {
    document.getElementById("menuitems").classList.toggle("hide");
}

//Generate buisness cards for directory
const requesturl = 'https://kaiblack17.github.io/finalsite/js/directory.JSON'
fetch(requesturl)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); //FOR TESTING
    const directory = jsonObject['directory'];

    for (let i = 0; i < directory.length; i++ ) {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let p4 = document.createElement('p');
      let img = document.createElement('img');

      img.setAttribute('src', directory[i].imageurl);
      h2.textContent = directory[i].name;
      p1.textContent = 'Website: ' + directory[i].siteurl;
      p2.textContent = 'Address: ' + directory[i].address;
      p3.textContent = 'Phone: ' + directory[i].phone;
      p4.textContent = 'Email: ' + directory[i].email;
      
      card.appendChild(img);
      card.appendChild(h2);
      card.appendChild(p1);
      card.appendChild(p2);
      card.appendChild(p3);
      card.appendChild(p4);

      document.querySelector('div.cards').appendChild(card);
    }

  });



  //Weather for home page

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

  const apiwurl = '//api.openweathermap.org/data/2.5/onecall?lat=40.521893&lon=-111.939102&appid=f7dae4438c31f3b6c7876be35f7a832c&units=imperial'
  fetch(apiwurl)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      console.table(jsonObject); //FOR TESTING
      const daily = jsonObject['daily'];

  
      for (let i = 0; i < daily.length; i++ ) {
        let sect = document.createElement('section');
        let h3 = document.createElement('h3');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
  
        h3.textContent = weekday[i];
        p1.textContent = daily[i].temp.day +' F';
        p2.textContent = daily[i].weather[0].description;
        p3.textContent = 'Humidity: ' + daily[i].humidity;
        
        sect.appendChild(h3);
        sect.appendChild(p1);
        sect.appendChild(p2);
        sect.appendChild(p3);
  
        document.querySelector('div.weatherforecast').appendChild(sect);
      }
  
    });



//fetch(apiwurl)
//.then((response) => response.json())
//.then((weatherinfo) => {
//  console.log(weatherinfo);

//  const todaynumber = mydate.getDay();

//  let mylist = weatherinfo.list;
//  let forecastday = todaynumber;

//  for (i=0; i< mylist.length; i++) {
    
//      forecastday += 1;
//      if (forecastday === 7) {forecastday = 0;}
    
//      let dayname = document.createElement("span")
//      dayname.textContent=weekday[forecastday];
    
//      let temp = document.createElement("p");
//      temp.textContent = weatherinfo.list[i].daily[i].temp.day + "\xB0";
    
//      let humid = document.createElement("p");
//      humid.textContent = weatherinfo.list[i].daily[i].humidity;

//     let desc = document.createElement("p");
//     desc.textContent = weatherinfo.list[i].daily[i].weather[0].description;
    
//      let theday = document.createElement("div");
//      theday.appendChild(dayname);
//      theday.appendChild(temp);
//      theday.appendChild(humid);
//      theday.appendChild(desc);
    
//    document.getElementById('forecast').appendChild(theday);
        
//    }
//});








//const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.521893&lon=-111.939102&appid=f7dae4438c31f3b6c7876be35f7a832c&units=imperial'