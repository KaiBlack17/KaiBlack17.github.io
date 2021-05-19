function togglemenu() {
    document.getElementById("menuitems").classList.toggle("hide");
}

let daynames = {
    "Sunday"
    "Monday"
    "Tuesday"
    "Wednesday"
    "Thursday"
    "Friday"
    "Saturday"
}

let d = new Date();
let dayname = daynames[d.getDay()];

let fulldate = dayname + ", " + d.getMonth() + " " + d.getDate() +", " + d.getFullYear();

document.getElementById("today").innerHTML = fulldate;
