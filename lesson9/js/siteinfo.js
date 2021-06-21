const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    //console.table(jsonObject); FOR TESTING
    const towns = jsonObject['towns'];

    //for (let i = 0; i < towns.length; i++ ) {

    for (let i = 0; i < towns.length; i++ ) {
        if (i == 2 || i == 6 || i == 0){
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h4 = document.createElement('h4');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      let img = document.createElement('img');


      h2.textContent = towns[i].name;
      h4.textContent = towns[i].motto;
      p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
      p2.textContent = 'Population: ' + towns[i].currentPopulation;
      p3.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
      img.setAttribute('src', towns[i].imageurl);

      card.appendChild(h2);
      card.append(h4);
      card.append(p1);
      card.append(p2);
      card.append(p3);
      card.append(img);

      document.querySelector('div.towns').appendChild(card);
    }
    }

  });


image.setAttribute('src', prophets[i].imageurl);