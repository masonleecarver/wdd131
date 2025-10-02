const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#last-modified");
const visits = document.querySelector("#visits");

const today = new Date();

const modified = new Date(document.lastModified);

year.textContent = today.getFullYear();

lastmodified.textContent =
"" + modified.toLocaleDateString() + " @ " + modified.toLocaleTimeString();

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits + " times";
} else {
    visits.textContent = ".... wait. This is actually your first time here! Thank you for your first submission! This deserves a party";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);