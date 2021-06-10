const t = parseFloat(document.getElementById('temp').textContent);
//console.log(t);

const s = parseFloat(document.getElementById('speed').textContent);
//console.log(s);


let windChill = 35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (.4275 * t * Math.pow(s, 0.16));
windChill = Math.round(windChill);
//console.log(windChill);

if (t <= 50 && s > 3) {
    document.getElementById('chill').textContent = "Wind Chill is "+windChill+" F";
}
else {
    document.getElementById('chill').textContent = "No Wind Chill Today";
}