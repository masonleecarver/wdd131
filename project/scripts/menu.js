const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");
const currentYear = document.querySelector("#currentyear")

const today = new Date();

currentYear.textContent = today.getFullYear();

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open"),
    menuButton.classList.toggle("open")
});