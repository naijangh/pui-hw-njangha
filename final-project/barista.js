/*what needs to happen here:
- micron.js for little animations
- gsap library?
- interactjs.io for drag and drop?
- responsive
- random generator function for drinks on today's orders
- function to populate html with random drinks
- each image needs a js counterpart to trigger a response when clicked?
- way to store which element was clicked and calculate if it was the correct one (like hangman guessing game js or tic tac toe?)
- basic function that takes user input and sees if it is correct and in the right order (1 then 2 then 3) and using if..then statements
*/

//class?
//if click: +1 untl 3
//wrong click, -,3 star then round down

//getting params so title changes with drink
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const drinkType = params.get('drink');

//changing page title based on parameter 
const descTitle = document.querySelector(".drink-title");
descTitle.innerText = drinkType;

//collecting image buttons from html
const espressoIng = document.querySelector("#espresso");
const hotChocolateIng = document.querySelector("#hot-chocolate");
const iceIng = document.querySelector("#ice");
const waterIng = document.querySelector("#water");
const steamedMilkIng = document.querySelector("#steamed-milk");
const milkFoamIng = document.querySelector("#milk-foam");

//.bind to pass a parameter. null to ignore 'this' which is required first parameter of bind
window.onload = function checkDrinkType() {
    if (drinkType === "Cappuccino") {
        //espresso
        espressoIng.addEventListener('click', checkCappuccinoIngredient.bind(null, espressoIng));   
        //hot chocolate
        hotChocolateIng.addEventListener('click', checkCappuccinoIngredient.bind(null, hotChocolateIng));
        //ice
        iceIng.addEventListener('click', checkCappuccinoIngredient.bind(null, iceIng));
        //water
        waterIng.addEventListener('click', checkCappuccinoIngredient.bind(null, waterIng));
        //steamed milk
        steamedMilkIng.addEventListener('click', checkCappuccinoIngredient.bind(null, steamedMilkIng));
        //milk foam
        milkFoamIng.addEventListener('click', checkCappuccinoIngredient.bind(null, milkFoamIng));

    } else if (drinkType === "Macchiato") {
        //espresso
        espressoIng.addEventListener('click', checkMacchiatoIngredient.bind(null, espressoIng));   
        //hot chocolate
        hotChocolateIng.addEventListener('click', checkMacchiatoIngredient.bind(null, hotChocolateIng));
        //ice
        iceIng.addEventListener('click', checkMacchiatoIngredient.bind(null, iceIng));
        //water
        waterIng.addEventListener('click', checkMacchiatoIngredient.bind(null, waterIng));
        //steamed milk
        steamedMilkIng.addEventListener('click', checkMacchiatoIngredient.bind(null, steamedMilkIng));
        //milk foam
        milkFoamIng.addEventListener('click', checkMacchiatoIngredient.bind(null, milkFoamIng));

    } else if (drinkType === "Americano") {
        //espresso
        espressoIng.addEventListener('click', checkAmericanoIngredient.bind(null, espressoIng));   
        //hot chocolate
        hotChocolateIng.addEventListener('click', checkAmericanoIngredient.bind(null, hotChocolateIng));
        //ice
        iceIng.addEventListener('click', checkAmericanoIngredient.bind(null, iceIng));
        //water
        waterIng.addEventListener('click', checkAmericanoIngredient.bind(null, waterIng));
        //steamed milk
        steamedMilkIng.addEventListener('click', checkAmericanoIngredient.bind(null, steamedMilkIng));
        //milk foam
        milkFoamIng.addEventListener('click', checkAmericanoIngredient.bind(null, milkFoamIng));
    }
}


let total = 3;

let cappuccino = ["espresso", "steamed-milk", "milk-foam"];
//checks if cappuccino ingredients are correct
function checkCappuccinoIngredient(ingredient) {
    if (cappuccino.includes(ingredient.id)) {
        ingredient.src = "../final-project/images/green-check.png";
        ingredient.alt = "image of green check because selection is correct";
        total = total;
    } else {
        ingredient.src = "../final-project/images/red-x.png";
        ingredient.alt = "image of red x because selection is incorrect";
        total = total - 0.5;
    }

    return total;
}

let macchiato = ["espresso", "steamed-milk"];
//checks if macchiato ingredients are correct
function checkMacchiatoIngredient(ingredient) {
    if (macchiato.includes(ingredient.id)) {
        ingredient.src = "../final-project/images/green-check.png";
        ingredient.alt = "image of green check because selection is correct";
        total = total;
    } else {
        ingredient.src = "../final-project/images/red-x.png";
        ingredient.alt = "image of red x because selection is incorrect";
        total = total - 0.5;
    }

    return total;
}

let americano = ["espresso", "water"];
//checks if americano ingredients are correct 
function checkAmericanoIngredient(ingredient) {
    if (americano.includes(ingredient.id)) {
        ingredient.src = "../final-project/images/green-check.png";
        ingredient.alt = "image of green check because selection is correct";
        total = total;
    } else {
        ingredient.src = "../final-project/images/red-x.png";
        ingredient.alt = "image of red x because selection is incorrect";
        total = total - 0.5;
    }

    return total;
}


const submittedMugImage = document.querySelector(".mug");
const ratingElement = document.querySelector("#rating");
//calculates the rating that should be awarded based on incorrect answers
function displayRating() {
    submittedMugImage.src = "../final-project/images/mug-filled.png";
    ratingElement.innerText = "Rating: " + total + "/3";
}

const submitButton = document.querySelector(".submit-button");
submitButton.addEventListener('click', displayRating);

/*
espressoIng.src = "../final-project/images/red-x.png";
espressoIng.alt = "image of red x because selection is incorrect";

espressoIng.src = "../final-project/images/green-check.png";
espressoIng.alt = "image of green check because selection is correct";
*/


/*
btnRemove.addEventListener('click', () => {
    deleteRoll(newRoll);
});
*/

//submit button tied to an alert??

//full cup with loading animation?






//loop to see if image collected name is in array?
//let total = 3;
/*for (let i = 0; i < cappucino.length; i++) {
    if (ingredient/parameter.id === cappuccino[i]) {
        ingredient.src = "../final-project/images/green-check.png";
        ingredient.alt = "image of green check because selection is correct";
    }
}
    ORRRR
    if (cappuccino.includes(ingredient.id)) {
        ingredient.src = "../final-project/images/green-check.png";
        ingredient.alt = "image of green check because selection is correct";
    } else {
        ingredient.src = "../final-project/images/red-x.png";
        ingredient.alt = "image of red x because selection is incorrect";
        total = total - 0.5;
    }
*/
//espressoIng.addEventListener('click', checkCappuccinoIngredient);