function togglemenu() {
    document.getElementById("menuitems").classList.toggle("hide");
}


let dat = new Date();
let y = dat.getFullYear();
let m = dat.getMonth();
    let month = (m++);
let d = dat.getDate();
let td = dat.getDay();
let day = 0;


if (td == 0) {
    day = "Sunday";
}
if (td == 1) {
    day = "Monday";
}
if (td == 2) {
    day = "Tuesday";
}
if (td == 3) {
    day = "Wednesday";
}
if (td == 4) {
    day = "Thursday";
}
if (td == 5) {
    day = "Friday";
}
if (td == 6) {
    day = "Saturday";
}


if (td == 5) {
    document.getElementById("pancake").style.display = "block";
}
else {
    document.getElementById("pancake").style.display = "none";
}


let output = day + " " + m + "/" + d + "/" + y;

document.getElementById("today").textContent = output