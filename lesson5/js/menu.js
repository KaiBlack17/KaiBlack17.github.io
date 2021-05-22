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


if (td = 0) {
    day = "Sunday";
    document.getElementById("pancake").style.display = "none";
}
if (td = 1) {
    day = "Monday";
    document.getElementById("pancake").style.display = "none";
}
if (td = 2) {
    day = "Tuesday";
    document.getElementById("pancake").style.display = "none";
}
if (td = 3) {
    day = "Wednesday";
    document.getElementById("pancake").style.display = "none";
}
if (td = 4) {
    day = "Thursday";
    document.getElementById("pancake").style.display = "none";
}
if (td = 5) {
    day = "Friday";
    document.getElementById("pancake").style.display = "block";
}
if (td = 6) {
    day = "Saturday";
    document.getElementById("pancake").style.display = "none";
}


let output = day + " " + m + "/" + d + "/" + y;

document.getElementById("today").textContent = output