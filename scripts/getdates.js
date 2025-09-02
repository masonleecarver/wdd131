const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#last-modified");

const today = new Date();

year.textContent = today.getFullYear();
lastmodified.textContent = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
}).format(new Date(document.lastModified));
