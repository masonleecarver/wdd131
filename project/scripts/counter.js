const visits = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
    visits.textContent = numVisits + " times";
} else {
    visits.textContent = ".... wait. This is actually your first time here! Thank you for your first submission! This deserves a party";
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);