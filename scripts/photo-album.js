const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#last-modified");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector(".nav");

const today = new Date();

year.textContent = today.getFullYear();
lastmodified.textContent = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
}).format(new Date(document.lastModified));

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuButton.classList.toggle("open");
});
