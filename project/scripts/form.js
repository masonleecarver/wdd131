const reasons = document.querySelector("#reason");

const reasonsList = [
    {
        id: "nice",
        name: "Saying something nice"
    },
    {
        id: "mean",
        name: "Offering critisim"
    },
    {
        id: "business",
        name: "Want to buy something"
    },
    {
        id: "other",
        name: "Other"
    }
];

function fillReasons() {
    reasonsList.forEach(reason => {
        let option = document.createElement("option");


        option.value = reason.id;
        option.textContent = reason.name;
        
        reasons.appendChild(option);
    });
};

fillReasons();