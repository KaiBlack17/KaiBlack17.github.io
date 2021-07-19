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
    //console.table(jsonObject); FOR TESTING
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