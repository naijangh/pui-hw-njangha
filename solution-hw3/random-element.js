//using code format of example on github, linked in hw 3 instruction doc

//create price variables 
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
    let glazePrice = newPrice;
    let currentGlazeOption = glazingSelect.value;
    if (currentGlazeOption === glazingOptions[0].glaze) {
        glazePrice = newPrice;
        price.innerText = glazePrice;
    } else if (currentGlazeOption === glazingOptions[1].glaze) {
        glazePrice = newPrice;
        price.innerText = glazePrice;
    } else if (currentGlazeOption === glazingOptions[2].glaze) {
        glazePrice = newPrice + .5;
        price.innerText = glazePrice;
    } else if (currentGlazeOption === glazingOptions[3].glaze) {
        glazePrice = newPrice + 1.5;
        price.innerText = glazePrice;
    }

};

//tells function to run when change is made to drop down
glazingSelect.addEventListener('change', updateGlazePrice);

//array of pack size option objects
const packSizeOptions = [
    {
        packSize: 1,
        price: 1,
    },
    {
        packSize: 3,
        price: 3,
    },
    {
        packSize: 6,
        price: 5,
    },
    {
        packSize: 12,
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
function updateSizePrice() {
    let currentPackOption = parseFloat(packSizeSelect.value);
    let packPrice = newPrice;
    if (currentPackOption === packSizeOptions[0].packSize) {
        packPrice = newPrice * 1 
        price.innerText = packPrice.toFixed(2);
    } else if (currentPackOption === packSizeOptions[1].packSize) {
        packPrice = newPrice * 3; 
        price.innerText = packPrice.toFixed(2);
    } else if (currentPackOption === packSizeOptions[2].packSize) {
        packPrice = newPrice * 5; 
        price.innerText = packPrice.toFixed(2);
    } else if (currentPackOption === packSizeOptions[3].packSize) {
        packPrice = newPrice * 10; 
        price.innerText = packPrice.toFixed(2);
    }
};

//tells function to run when change is made to drop down
packSizeSelect.addEventListener('change', updateSizePrice);


//empty cart array
let cart = [];

//from hw to get roll type from URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//update page header
const descTitle = document.querySelector(".desc-page-title");
descTitle.innerText = rollType + " cinnamon roll";

//update base price
//const descBasePrice = document.getElementById("product-page-price");
//descBasePrice.innerText = .basePrice;

//update image: HOW TO USE JSON THO?
const descImage = document.querySelector(".product-desc-image");
descImage.src = "../assets/products/" + rollType + "-cinnamon-roll.jpg";
descImage.alt = "image of " + rollType + " cinnamon roll"

/*if (rollType === "Double-Chocolate") {
    price = rolls.Double-Chocolate.basePrice;
}*/
//UPDATE PRICE


//Print cart array (featuring code from hw instructions)
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}
cart.push(Roll);
console.log(cart);