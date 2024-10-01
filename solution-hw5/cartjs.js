const cartSet = new Set();
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}

function addNewRoll (rollType, rollGlazing, packSize, basePrice) {
    const newRoll = new Roll(rollType, rollGlazing, packSize, basePrice);
    cartSet.add(newRoll);
    return newRoll;
}
    
addNewRoll("Original", "Sugar Milk", 1, 2.49);
addNewRoll("Walnut", "Vanilla Milk", 12, 3.49);
addNewRoll("Raisin", "Sugar Milk", 3, 2.99);
addNewRoll("Apple", "Original", 3, 3.49);

for (const newRoll of cartSet) {
    console.log(newRoll);
    createElement(newRoll);
}

function createElement(newRoll) {
    //console.log('Creating an Element!')
    const cartTemplate = document.querySelector("#cart-template");
    const clone = cartTemplate.content.cloneNode(true);
    newRoll.element = clone.querySelector(".item-in-cart");
    let newRollImage = document.querySelector("cart-image");
}

let cartRollImage = document.querySelector(".cart-image");
