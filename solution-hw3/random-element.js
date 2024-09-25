//using code format of example on github, linked in hw 3 instruction doc

//create price variables 
const basePrice = 2.49;
let price = document.getElementById("product-page-price");
newPrice = parseFloat(price.textContent);

//array of glaze option objects
const glazingOptions = [
    {
        glaze: "Keep original",
        price: 0.00
    },
    {
        glaze: "Sugar milk",
        price: 0.00
    },
    {
        glaze: "Vanilla milk",
        price: 0.50
    },
    {
        glaze: "Double chocolate",
        price: 1.50
    }
];

//using a for loop to dynamically populate HTML select element
//referenced stackoverflow here
const glazingSelect = document.getElementById("glazing-select");

for (let i = 0; i < glazingOptions.length; i++) {
    let glazeDropDownOpt = document.createElement("option");
    glazeDropDownOpt.value = glazingOptions[i].glaze;
    glazeDropDownOpt.innerHTML = glazeDropDownOpt.value;
    glazingSelect.appendChild(glazeDropDownOpt);
}

//calculates glaze prices and updates on website
function updateGlazePrice() {
    currentOption = glazingSelect.value;
    console.log(currentOption);
    if (currentOption === glazingOptions[0].glaze) {
        newPrice = basePrice;
        price.innerText = newPrice;
        price.innerText = newPrice;
    } else if (currentOption === glazingOptions[1].glaze) {
        newPrice = basePrice;
        price.innerText = newPrice;
    } else if (currentOption === glazingOptions[2].glaze) {
        newPrice = basePrice + .5;
        price.innerText = newPrice;
    } else if (currentOption === glazingOptions[3].glaze) {
        newPrice = basePrice + 1.5;
        price.innerText = newPrice;
    }

};

//tells function to run when change is made to drop down
glazingSelect.addEventListener('change', updateGlazePrice);

//array of pack size option objects
const packSizeOptions = [
    {
        packSize: "1",
        price: 1,
    },
    {
        packSize: "3",
        price: 3,
    },
    {
        packSize: "6",
        price: 5,
    },
    {
        packSize: "12",
        price: 10,
    },
];

//using a for loop to dynamically populate HTML select element
const packSizeSelect = document.getElementById("pack-size-select");

for (let i = 0; i < packSizeOptions.length; i++) {
    let sizeDropDownOpt = document.createElement("option");
    sizeDropDownOpt.value = packSizeOptions[i].packSize;
    sizeDropDownOpt.innerHTML = sizeDropDownOpt.value;
    packSizeSelect.appendChild(sizeDropDownOpt);
}

//calculates pack size prices and updates on website
function updateSizePrice {

};

//tells function to run when change is made to drop down
packSizeSelect.addEventListener('change', updateSizePrice);


