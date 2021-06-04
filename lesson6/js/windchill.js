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
    document.getElementById('chill').textContent = " No Wind Chill Today";
}



/////1
const t1 = parseFloat(document.getElementById('temp1').textContent);
//console.log(t);

const s1 = parseFloat(document.getElementById('speed1').textContent);
//console.log(s);


let windChill1 = 35.74 + (0.6215 * t1) - (35.75 * Math.pow(s1, 0.16)) + (.4275 * t1 * Math.pow(s1, 0.16));
windChill1 = Math.round(windChill1);
//console.log(windChill);

if (t1 <= 50 && s1 > 3) {
    document.getElementById('chill1').textContent = " "+windChill1+" F";
}
else {
    document.getElementById('chill1').textContent = " No Wind Chill Today";
}



/////2
const t2 = parseFloat(document.getElementById('temp2').textContent);
//console.log(t);

const s2 = parseFloat(document.getElementById('speed2').textContent);
//console.log(s);


let windChill2 = 35.74 + (0.6215 * t2) - (35.75 * Math.pow(s2, 0.16)) + (.4275 * t2 * Math.pow(s2, 0.16));
windChill2 = Math.round(windChill2);
//console.log(windChill);

if (t2 <= 50 && s2 > 3) {
    document.getElementById('chill2').textContent = " "+windChill2+" F";
}
else {
    document.getElementById('chill2').textContent = " No Wind Chill Today";
}



/////3
const t3 = parseFloat(document.getElementById('temp3').textContent);
//console.log(t);

const s3 = parseFloat(document.getElementById('speed3').textContent);
//console.log(s);


let windChill3 = 35.74 + (0.6215 * t3) - (35.75 * Math.pow(s3, 0.16)) + (.4275 * t3 * Math.pow(s3, 0.16));
windChill3 = Math.round(windChill3);
//console.log(windChill);

if (t3 <= 50 && s3 > 3) {
    document.getElementById('chill3').textContent = " "+windChill3+" F";
}
else {
    document.getElementById('chill3').textContent = " No Wind Chill Today";
}



/////4
const t4 = parseFloat(document.getElementById('temp4').textContent);
//console.log(t);

const s4 = parseFloat(document.getElementById('speed4').textContent);
//console.log(s);


let windChill4 = 35.74 + (0.6215 * t4) - (35.75 * Math.pow(s4, 0.16)) + (.4275 * t4 * Math.pow(s4, 0.16));
windChill4 = Math.round(windChill4);
//console.log(windChill);

if (t4 <= 50 && s4 > 3) {
    document.getElementById('chill4').textContent = " "+windChill4+" F";
}
else {
    document.getElementById('chill4').textContent = " No Wind Chill Today";
}



/////5
const t5 = parseFloat(document.getElementById('temp5').textContent);
//console.log(t);

const s5 = parseFloat(document.getElementById('speed5').textContent);
//console.log(s);


let windChill5 = 35.74 + (0.6215 * t5) - (35.75 * Math.pow(s5, 0.16)) + (.4275 * t5 * Math.pow(s5, 0.16));
windChill5 = Math.round(windChill5);
//console.log(windChill);

if (t5 <= 50 && s5 > 3) {
    document.getElementById('chill5').textContent = " "+windChill5+" F";
}
else {
    document.getElementById('chill5').textContent = " No Wind Chill Today";
}
