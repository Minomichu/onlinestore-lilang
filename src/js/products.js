//Ligger i en if-sats pga att alla js-filer komprimeras till en gemensam = får felmeddelanden för anrop från fel sidor
if(window.location.href === "http://localhost:3000/produkter.html" || window.location.href === "http://mimmimi.com/Bildbehandling/lilang/produkter.html") {


//Visar valda delar från kategoreierna
const lowBudget = document.getElementById('lowBudget');
const highBudget= document.getElementById('highBudget');

const buttonLowMobile = document.getElementById('chooseLowBudgetMobile');
const buttonLowDesktop = document.getElementById('chooseLowBudgetDesktop');

const buttonHighMobile = document.getElementById('chooseHighBudgetMobile');
const buttonHighDesktop = document.getElementById('chooseHighBudgetDesktop');

buttonLowMobile.addEventListener("click", noHigh, false);
buttonLowDesktop.addEventListener("click", noHigh, false);

buttonHighMobile.addEventListener("click", noLow, false);
buttonHighDesktop.addEventListener("click", noLow, false);


//Visar endast hög budget
function noLow() {
    lowBudget.style.display = "none";
    highBudget.style.display = "flex";
    highBudget.scrollIntoView();    
}

//Visar endast lågbudget
function noHigh() {
    highBudget.style.display = "none";
    lowBudget.style.display = "flex";
    lowBudget.scrollIntoView();
}

}