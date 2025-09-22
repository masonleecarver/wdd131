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

const photos = [
  {
    caption: "Kambry.",
    dayTaken: "Dec 9, 2023",
    location: "Home",
    imageURL: "images/photo-album/kambry.jpg"
  },
  {
    caption: "A fun house I made.",
    dayTaken: "Dec 24, 2023",
    location: "Home", 
    imageURL: "images/photo-album/gingerbread-house.jpg"
  },
  {
    caption: "Isn't he sassy?",
    dayTaken: "Dec 25, 2023", 
    location: "Home",
    imageURL: "images/photo-album/sock-man.jpg"
  },
  {
    caption: "First apartment.",
    dayTaken: "Jan 9, 2024",
    location: "Rexburg",
    imageURL: "images/photo-album/apartment.JPG"
  },
  {
    caption: "Sunrise in Rexburg.",
    dayTaken: "Jan 15, 2024",
    location: "Rexburg",
    imageURL: "images/photo-album/sunrise.jpg"
  },
  {
    caption: "Walking to the temple.",
    dayTaken: "Jan 28, 2024",
    location: "Rexburg",
    imageURL: "images/photo-album/temple.jpg"
  },
  {
    caption: "Mission friends.",
    dayTaken: "Feb 22, 2024",
    location: "A Church",
    imageURL: "images/photo-album/mission-reuinion.jpg"
  },
  {
    caption: "Eating out with friends.",
    dayTaken: "Mar 26, 2024",
    location: "Rexburg",
    imageURL: "images/photo-album/dinner.jpg"
  },
   {
    caption: "Tire exploded!",
    dayTaken: "Apr 20, 2024",
    location: "Laketown",
    imageURL: "images/photo-album/no-tire.jpg"
  },
   {
    caption: "Girl Diinnnerr",
    dayTaken: "Apr 22, 2024",
    location: "Garden City",
    imageURL: "images/photo-album/girl-dinner.jpg"
  },
   {
    caption: "I was a vampire!",
    dayTaken: "Oct 31, 2024",
    location: "Home",
    imageURL: "images/photo-album/vampire.jpg"
  },
   {
    caption: "pspsppspspps",
    dayTaken: "Feb 23, 2023",
    location: "Home",
    imageURL: "images/photo-album/tux.jpg"
   }
];


const allLink = document.querySelector("#all-photos");

allLink.addEventListener("click", () => {
    createCards(photos);
})

const atHomeLink = document.querySelector("#at-home");

atHomeLink.addEventListener("click", () => {
    let atHome = photos.filter(photo => photo.location.includes("Home"))
    createCards(atHome);
})

const rexLink = document.querySelector("#rexburg");

rexLink.addEventListener("click", () => {
    let inRex = photos.filter(photo => photo.location.includes("Rexburg"));
    createCards(inRex);
})

const olderLink = document.querySelector("#older");

olderLink.addEventListener("click", () => {
    let olderPhotos = photos.filter(photo => photo.dayTaken.includes("2023"));
    createCards(olderPhotos);
})

const newerLink = document.querySelector("#newer");

newerLink.addEventListener("click", () => {
    let newerPhotos = photos.filter(photo => photo.dayTaken.includes("2024"));
    createCards(newerPhotos);
})

function createCards(list) {
    document.querySelector("#photo-grid").replaceChildren();
    list.forEach(photo => {
        let card = document.createElement("section");
        let title = document.createElement("h1");
        let dayTaken = document.createElement("p");
        let location = document.createElement("p");
        let img = document.createElement("img");

        title.innerHTML = photo.caption;
        dayTaken.innerHTML = "Date: " + photo.dayTaken;
        location.innerHTML = "Location: " + photo.location;
        img.setAttribute("src", photo.imageURL);
        img.setAttribute("loading", "lazy");
        img.setAttribute("alt", title);

        card.appendChild(title);
        card.appendChild(dayTaken);
        card.appendChild(location);
        card.appendChild(img);

        document.querySelector("#photo-grid").appendChild(card);
    })
};

createCards(photos);