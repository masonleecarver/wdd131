const year = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#last-modified");
const productsSelect = document.querySelector("#products");

const today = new Date();

const modified = new Date(document.lastModified);

year.textContent = today.getFullYear();

lastmodified.textContent =
"" + modified.toLocaleDateString() + " @ " + modified.toLocaleTimeString();


const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProducts() {
    products.forEach(product => {
        let option = document.createElement("option");
        
        
        option.value = product.id;
        option.textContent = product.name.toUpperCase();


        productsSelect.appendChild(option);

    }    
)
}

populateProducts();


