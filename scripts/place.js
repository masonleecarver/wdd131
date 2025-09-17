const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#last-modified");
const temp = document.querySelector("#temperature");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#wind-chill");

const today = new Date();

year.textContent = today.getFullYear();

const modified = new Date(document.lastModified);

lastmodified.textContent =
  "" + modified.toLocaleDateString() + " @ " + modified.toLocaleTimeString();

function calcWindChill(tempC, windKph) {
  if (tempC <= 10 && windKph > 4.8) {
    let wc =
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKph, 0.16) +
      0.3965 * tempC * Math.pow(windKph, 0.16);
    return wc.toFixed(1);
  } else {
    return "N/A";
  }
}

let t = parseFloat(temp.textContent);
let w = parseFloat(wind.textContent);
let wKmh = w * 1.60934;

windChill.textContent = calcWindChill(t, wKmh);
