//references lab 5 example

//creating an array to represent the cart
const cartArr = [];

//creatng a roll class
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

//update total price displayed (within addNewRoll function)
let totalDisplayed = document.getElementById("total-price");
let totalPrice = 0;

//creating a function to create new rolls and add to cart set with updated price
function addNewRoll(rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    calcRollPrice(newRoll);
    cartArr.push(newRoll);
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

//loop through cart array to create a DOM element for each Roll object
for (const newRoll of cartArr) {
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
   rollTitleElement.innerText = newRoll.type + " Cinnamon Roll";
   rollGlazingElement.innerText = newRoll.glazing;
   rollSizeElement.innerText = "Pack size: " + newRoll.size;
   rollPriceElement.innerText = newRoll.basePrice;
   rollRemoveElement.innerText = "Remove";
}

//removes roll from cart and updates total price accordingly
function deleteRoll(newRoll) {
    newRoll.element.remove();
    cartArr.pop(newRoll);
    totalPrice = totalPrice - parseFloat(newRoll.basePrice);
    totalDisplayed.innerText = "$" + totalPrice.toFixed(2);
}
