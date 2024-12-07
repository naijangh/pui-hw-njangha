/*
- micron.js for little animations / gsap library?
- responsive
- random generator function for drinks on today's orders
- function to populate html with random drinks
- help / how to play page
- animated go back button once rating is out
- text animation on home screen?
- loading on order screen
- local storage for ratings with potential reset button? saving ratings to array looped for mean?
*/
//class?

//getting params so title changes with drink based on selected drink from list
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const drinkType = params.get('drink');

//changing page title based on params (to correctly match the type of drink) 
const descTitle = document.querySelector(".drink-title");
descTitle.innerText = drinkType;

//collecting image 'buttons' from html
const espressoIng = document.querySelector("#espresso");
const hotChocolateIng = document.querySelector("#hot-chocolate");
const iceIng = document.querySelector("#ice");
const waterIng = document.querySelector("#water");
const steamedMilkIng = document.querySelector("#steamed-milk");
const milkFoamIng = document.querySelector("#milk-foam");

/*const menu = {
    cappuccino: ["espresso", "steamed-milk", "milk-foam"],
    macchiato: ["espresso", "steamed-milk"],
    americano: ["espresso", "water"]
}
    const menu = [{ drink: "cappuccino", ingredients: ["egg", "milk"],}, {drink: "macchiato", ingredients: ["egg", "milk", "honey"],},];
*/

//.bind to pass a parameter. null to ignore 'this' which is required first parameter of bind from  https://weekendprojects.dev/ 

//on load, the params are pulled so the correct set of ingredients can be used during the game
window.onload = function checkDrinkType() {
    if (drinkType === "Cappuccino") {
        //makes sure the correct hint displays for cappuccino
        hintButton.addEventListener('click', () => {
            showHint(cappuccino);
        });
        //submit for cappuccino
        submitButton.addEventListener('click', () => {
            gameOver(cappuccino);
        });
        //espresso ingredient is checked against cappuccino array
        espressoIng.addEventListener('click', checkCappuccinoIngredient.bind(null, espressoIng));   
        //hot chocolate ingredient is checked against cappuccino array
        hotChocolateIng.addEventListener('click', checkCappuccinoIngredient.bind(null, hotChocolateIng));
        //ice ingredient is checked against cappuccino array
        iceIng.addEventListener('click', checkCappuccinoIngredient.bind(null, iceIng));
        //water ingredient is checked against cappuccino array
        waterIng.addEventListener('click', checkCappuccinoIngredient.bind(null, waterIng));
        //steamed milk ingredient is checked against cappuccino array
        steamedMilkIng.addEventListener('click', checkCappuccinoIngredient.bind(null, steamedMilkIng));
        //milk foam ingredient is checked against cappuccino array
        milkFoamIng.addEventListener('click', checkCappuccinoIngredient.bind(null, milkFoamIng));

    } else if (drinkType === "Macchiato") {
        //makes sure the correct hint displays for macchiato
        hintButton.addEventListener('click', () => {
            showHint(macchiato);
        });
        //submit for macchiato
        submitButton.addEventListener('click', () => {
            gameOver(macchiato);
        });
        //espresso ingredient is checked against macchiato array
        espressoIng.addEventListener('click', checkMacchiatoIngredient.bind(null, espressoIng));   
        //hot chocolate ingredient is checked against macchiato array
        hotChocolateIng.addEventListener('click', checkMacchiatoIngredient.bind(null, hotChocolateIng));
        //ice ingredient is checked against macchiato array
        iceIng.addEventListener('click', checkMacchiatoIngredient.bind(null, iceIng));
        //water ingredient is checked against macchiato array
        waterIng.addEventListener('click', checkMacchiatoIngredient.bind(null, waterIng));
        //steamed milk ingredient is checked against macchiato array
        steamedMilkIng.addEventListener('click', checkMacchiatoIngredient.bind(null, steamedMilkIng));
        //milk foam ingredient is checked against macchiato array
        milkFoamIng.addEventListener('click', checkMacchiatoIngredient.bind(null, milkFoamIng));

    } else if (drinkType === "Americano") {
        //makes sure the correct hint displays for americano
        hintButton.addEventListener('click', () => {
            showHint(americano);
        });
        //submit for americano
        submitButton.addEventListener('click', () => {
            gameOver(americano);
        });
        //espresso ingredient is checked against americano array
        espressoIng.addEventListener('click', checkAmericanoIngredient.bind(null, espressoIng));   
        //hot chocolate ingredient is checked against americano array
        hotChocolateIng.addEventListener('click', checkAmericanoIngredient.bind(null, hotChocolateIng));
        //ice ingredient is checked against americano array
        iceIng.addEventListener('click', checkAmericanoIngredient.bind(null, iceIng));
        //water ingredient is checked against americano array
        waterIng.addEventListener('click', checkAmericanoIngredient.bind(null, waterIng));
        //steamed milk ingredient is checked against americano array
        steamedMilkIng.addEventListener('click', checkAmericanoIngredient.bind(null, steamedMilkIng));
        //milk foam ingredient is checked against americano array
        milkFoamIng.addEventListener('click', checkAmericanoIngredient.bind(null, milkFoamIng));
    }
}

//get p for hint and submission rating section
const ratingElement = document.querySelector("#rating");

//get hint button
const hintButton = document.getElementById("hint-button");

//show hint: how many ingredients there are
function showHint(drinkArray) {
    ratingElement.innerText = drinkArray.length + " ingredients";
}

//get submit button
const submitButton = document.querySelector(".submit-button");
//to calculate ranking out of 3
let rankingTotal = 3;
//to make sure all the ingredients were selected
let ingredientTotal = 0;

//
function gameOver(drinkLength) {
    //if number of ingredients selected match the length of the corresponding array, the rating is displayed
    if (ingredientTotal === drinkLength.length) {
        displayRating();
    //otherwise, user receives an alert that there are still ingredients missing
    } else if (ingredientTotal !== drinkLength.length) {
        window.alert("There are still ingredients needed for your drink!");
    }
    //disabling clicking events after initial click (referencing slingacademy.com)
    submitButton.classList.add("disabled"); 

}

let cappuccino = ["espresso", "steamed-milk", "milk-foam"];
//checks if cappuccino ingredients are correct
function checkCappuccinoIngredient(ingredient) {
    //checks to see if selected ingredient is within cappuccino array
    //replaces with green check if yes
    if (cappuccino.includes(ingredient.id)) {
        ingredient.src = "../final-project/images/green-check.png";
        ingredient.alt = "image of green check because selection is correct";
        rankingTotal = rankingTotal;
        ingredientTotal = ingredientTotal + 1;
    //replaces with red x if no
    } else {
        ingredient.src = "../final-project/images/red-x.png";
        ingredient.alt = "image of red x because selection is incorrect";
        rankingTotal = rankingTotal - 0.5;
    }
    //disabling clicking events after initial click (referencing slingacademy.com)
    ingredient.classList.add("disabled"); 
    return rankingTotal;
}

let macchiato = ["espresso", "steamed-milk"];
//checks if macchiato ingredients are correct
function checkMacchiatoIngredient(ingredient) {
    //checks to see if selected ingredient is within macchiato array
    //replaces with green check if yes
    if (macchiato.includes(ingredient.id)) {
        ingredient.src = "../final-project/images/green-check.png";
        ingredient.alt = "image of green check because selection is correct";
        rankingTotal = rankingTotal;
        ingredientTotal = ingredientTotal + 1;
    //replaces with red x if no
    } else {
        ingredient.src = "../final-project/images/red-x.png";
        ingredient.alt = "image of red x because selection is incorrect";
        rankingTotal = rankingTotal - 0.5;
    }
    //disabling clicking events after initial click (referencing slingacademy.com)
    ingredient.classList.add("disabled"); 
    return rankingTotal;
}

let americano = ["espresso", "water"];
//checks if americano ingredients are correct 
function checkAmericanoIngredient(ingredient) {
    //checks to see if selected ingredient is within americano array using html id
    //replaces with green check if yes
    if (americano.includes(ingredient.id)) {
        ingredient.src = "../final-project/images/green-check.png";
        ingredient.alt = "image of green check because selection is correct";
        rankingTotal = rankingTotal;
        ingredientTotal = ingredientTotal + 1;
    //replaces with red x if no
    } else {
        ingredient.src = "../final-project/images/red-x.png";
        ingredient.alt = "image of red x because selection is incorrect";
        rankingTotal = rankingTotal - 0.5;
    } 
    //disabling clicking events after initial click (referencing slingacademy.com)
    ingredient.classList.add("disabled"); 
    return rankingTotal;
}

const submittedMugImage = document.querySelector(".mug");
//calculates the rating that should be awarded based on incorrect answers
function displayRating() {
    submittedMugImage.src = "../final-project/images/mug-filled.png";
    ratingElement.innerText = "Rating: " + rankingTotal + "/3";
}




//full cup with loading animation?
