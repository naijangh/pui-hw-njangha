
//using code format of example on github, linked in hw 3 instruction doc
//empty cart array
let cart = [];

//from hw to get roll type from URL
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

//update page header
const descTitle = document.querySelector(".desc-page-title");
descTitle.innerText = rollType + " cinnamon roll";


//update image
const descImage = document.querySelector(".product-desc-image");
descImage.src = "../assets/products/" + rollType.toLowerCase() + "-cinnamon-roll.jpg";
descImage.alt = "image of " + rollType + " cinnamon roll"


//UPDATE PRICE
//create price variables 
let price = document.getElementById("product-page-price");

let newPrice;
if (rollType === "Original") {
    newPrice = rolls.Original.basePrice;
} else if (rollType === "Apple") {
    newPrice = rolls.Apple.basePrice;
} else if (rollType === "Raisin") {
    newPrice = rolls.Raisin.basePrice;
} else if (rollType === "Walnut") {
    newPrice = rolls.Walnut.basePrice;
} else if (rollType === "Double-chocolate") {
    newPrice = rolls['Double-Chocolate']['basePrice'];
} else if (rollType === "Strawberry") {
    newPrice = rolls.Strawberry.basePrice;
}

price.innerText = newPrice;

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


//Print cart array (featuring code from hw instructions)
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

const AddToCartButton = document.getElementById("addcart-button");

AddToCartButton.addEventListener('click', updateCart);

function updateCart() {
    /*const userInputGlazing = glazingSelect.value;
    const userInputSize = packSizeSelect.value; */
    let cartedRoll = new Roll (rollType, glazingSelect.value, packSizeSelect.value, newPrice);
   // createElement(cartedRoll);
    cart.push(cartedRoll);
    console.log(cart);
    saveToLocalStorage();
}


function saveToLocalStorage() {
    const cartArrayString = JSON.stringify(cart);
    console.log(cartArrayString);
    localStorage.setItem('storedRolls', cartArrayString);
}



//function to create a DOM element for object
/*
function createElement(newRoll) {
    const cartTemplate = document.querySelector("#cart-template"); //grabbing reference to template. (HTML inside the <template> tags is not rendered by the browser. But we can use JavaScript to copy the template and add these copies to the DOM.)
    const clone = cartTemplate.content.cloneNode(true); //get the content in the template and copy using cloneNode. True means we want a deep copy
    newRoll.element = clone.querySelector(".item-in-cart"); //storing a reference to newly copied element (if printed, this will show new html nodes within .item-in-cart)
    const btnRemove = newRoll.element.querySelector(".remove-button"); //grabs remove html
    btnRemove.addEventListener('click', () => {
        deleteRoll(newRoll);
    }); //attaches delete function to button click
    const cartListElement = document.querySelector(".cart-page-container"); //reference to div that will contain cart items
    cartListElement.prepend(newRoll.element);

    updateElement(newRoll);
}*/


//PRODUCT DETAIL PAGE////////////////////////////////////
//if local storage exists: proceed
    //else: create new cart array

//user inputs glazing and pack size
    //price reflects changes

//event listener on add to cart which does:
    //Roll instance containing user input is added to cart array
    //convert cart to JSON 
        //save to local storage
        //print contents of cart after saving

//CART PAGE/////////////////////////////////////////////
//retrieve cart from local storage
    //if none exists: create an empty cart array

//populate the DOM with items in cart storage (using template and stuff from HW5)

//clicking remove removes item from cart array
    //convert cart to JSON 
        //save to local storage
        //print the cart in local storage after storing!
    //remove from DOM 
    //update total price on cart page

//PAY ATTENTION TO://///////////////////////////////////
//only remove the object you want (don't touch duplicates)
//print cart in local storage whenever it is updated
//storage should persist through reload and going to diff pages


//references lab 5 example

//update total price displayed (within addNewRoll function)
let totalDisplayed = document.getElementById("total-price");
let totalPrice = 0;

//creating a function to create new rolls and add to cart set with updated price
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    calcRollPrice(newRoll);
    cart.push(newRoll);
    totalPrice = totalPrice + parseFloat(newRoll.basePrice);
    totalDisplayed.innerText = "$" + totalPrice.toFixed(2);
}

//takes Roll object as a parameter to calculate price
function calcRollPrice(Roll) {
    let glazePrice;
    //glazing
    if (Roll.glazing === "Original") {
        glazePrice = Roll.basePrice;
    } else if (Roll.glazing === "Sugar milk") {
        glazePrice = Roll.basePrice;
    } else if (Roll.glazing === "Vanilla milk") {
        glazePrice = Roll.basePrice + 0.5;
    } else if (Roll.glazing === "Double chocolate") {
        glazePrice = Roll.basePrice + 1.5;
    }
    Roll.basePrice = glazePrice;

    let finalPrice;
    //pack size
    if (Roll.size === 1) {
        finalPrice = Roll.basePrice;
    } else if (Roll.size === 3) {
        finalPrice = Roll.basePrice * 3;
    } else if (Roll.size === 6) {
        finalPrice = Roll.basePrice * 5;
    } else if (Roll.size === 12) {
        finalPrice = Roll.basePrice * 10;
    }
    Roll.basePrice = finalPrice.toFixed(2);
}

//creating the four Roll objects    
addNewRoll("Original", "Sugar milk", 1, 2.49);
addNewRoll("Walnut", "Vanilla milk", 12, 3.49);
addNewRoll("Raisin", "Sugar milk", 3, 2.99);
addNewRoll("Apple", "Original", 3, 3.49);


//add new roll but with json string?


/////////////////////////////////////////////////////////////////////////


//loop through cart array to create a DOM element for each Roll object
for (const newRoll of cart) {
    console.log(newRoll);
    createElement(newRoll);
}

//function to create a DOM element for object
function createElement(newRoll) {
    const cartTemplate = document.querySelector("#cart-template"); //grabbing reference to template. (HTML inside the <template> tags is not rendered by the browser. But we can use JavaScript to copy the template and add these copies to the DOM.)
    const clone = cartTemplate.content.cloneNode(true); //get the content in the template and copy using cloneNode. True means we want a deep copy
    newRoll.element = clone.querySelector(".item-in-cart"); //storing a reference to newly copied element (if printed, this will show new html nodes within .item-in-cart)
    const btnRemove = newRoll.element.querySelector(".remove-button"); //grabs remove html
    btnRemove.addEventListener('click', () => {
        deleteRoll(newRoll);
    }); //attaches delete function to button click
    const cartListElement = document.querySelector(".cart-page-container"); //reference to div that will contain cart items
    cartListElement.prepend(newRoll.element);

    updateElement(newRoll);
}


//takes roll and updates correct DOM element
function updateElement(newRoll) {
    //creates variables for elements
    const rollImageElement = newRoll.element.querySelector(".cart-image"); //why not document?
    const rollRemoveElement = newRoll.element.querySelector(".remove-button");
    const rollTitleElement = newRoll.element.querySelector(".cart-item-title");
    const rollGlazingElement = newRoll.element.querySelector(".cart-item-glazing");
    const rollSizeElement = newRoll.element.querySelector(".cart-item-size");
    const rollPriceElement = newRoll.element.querySelector(".price-container");
    //updates DOM elements
    rollImageElement.src = "../assets/products/" + newRoll.type.toLowerCase() + "-cinnamon-roll.jpg";
    rollImageElement.alt = "This is an image of a " + newRoll.type + " Cinnamon Roll.";
    rollTitleElement.innerText = newRoll.type + " Cinnamon Roll";
    rollGlazingElement.innerText = newRoll.glazing;
    rollSizeElement.innerText = "Pack Size: " + newRoll.size;
    rollPriceElement.innerText = "$" + newRoll.basePrice;
    rollRemoveElement.innerText = "Remove";
}

//removes roll from cart and updates total price accordingly
function deleteRoll(newRoll) {
    newRoll.element.remove();
    cart.pop(newRoll);
    totalPrice = totalPrice - parseFloat(newRoll.basePrice);
    totalDisplayed.innerText = "$" + totalPrice.toFixed(2);
    saveToLocalStorage();
}





function retrieveFromLocalStorage() {
    const cartArrayString = localStorage.getItem('storedRolls');
    const cartArray = JSON.parse(cartArrayString);
    console.log(cartArray);
    for (let i = 0; i < cartArray.length; i++) {
        let thisRollType = cartArray[i].type;
        let thisGlazing = cartArray[i].glazing;
        let thisPackSize = cartArray[i].size;
        let thisBasePrice = cartArray[i].basePrice;

        const roll = addnewRoll(thisRollType, thisGlazing, thisPackSize, thisBasePrice);
        createElement(roll);
        updateElement(roll);
    };
   /* for (const rollData of cartArray) {
        const roll = addNewRoll(rollData.type, rollData.rollGlazing, rollData.packSize, rollData.basePrice);
        createElement(roll);
        updateElement(roll);
    }*/
};

if (localStorage.getItem('storedRolls') != null) {
    retrieveFromLocalStorage();
};


/* note to self for next homework: potential way to streamline price calculation function:
Try this: calcPrice (variable) = (rolls[newRoll.type].basePrice + glaze.price) * size.price;
*/






















