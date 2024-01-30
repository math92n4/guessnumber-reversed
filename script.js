// eventlistener to start/restart the game
document.querySelector('#startButton').addEventListener("click", start);

// calls hide() to hide the buttons when the page is loaded
document.addEventListener("DOMContentLoaded", hide)

// buttons
const tooLowButton = document.getElementById("tooLow")
const correctButton = document.getElementById("correct")
const tooHighButton = document.getElementById("tooHigh")

// eventlisteners to the 3 outcomes
tooLowButton.addEventListener('click', tooLow)
correctButton.addEventListener('click', correct)
tooHighButton.addEventListener('click', tooHigh)

// our <ul>
const list = document.querySelector('#list');

// our 3 variables
let lowestPossibleNumber;
let highestPossibleNumber;
let guess;

// hide the buttons 
function hide() {
    tooLowButton.classList = "hide"
    correctButton.classList = "hide"
    tooHighButton.classList = "hide"
}

// starts/restarts the game and sets the values to 1 and 100
function start() {
    list.innerHTML = "";
    lowestPossibleNumber = 1;
    highestPossibleNumber = 100;
    tooLowButton.classList.remove("hide");
    correctButton.classList.remove("hide");
    tooHighButton.classList.remove("hide");
    guessNumber();
}

// calculates the median between two numbers
function generateNumber() {
    return Math.floor((lowestPossibleNumber + highestPossibleNumber) / 2);
}

// sets the guess to the median of the two variables
// and appends a new line to the ul
function guessNumber() {
    guess = generateNumber();
    const html = `<li>My guess is ${guess} - is that correct?</li>`
    list.insertAdjacentHTML("beforeend", html)
}

// if too low button is pressed, we know that the correct answer is higher than the guess took
// therefore we set the lowestPossibleNumber to guess + 1
// takes a new guess
function tooLow() {
    lowestPossibleNumber = guess + 1
    guessNumber();
}

// if too high button is pressed, we know that the correct answer is lower than the guess took
// therefore we set the highestPossibleNumber to guess - 1
// takes a new guess
function tooHigh() {
    highestPossibleNumber = guess - 1
    guessNumber();
}

// displays some text if the guess was correct and calls hide() to hide the buttons
function correct() {
    const html = `<li>${guess} was correct! Press "Start" to try again</li>`
    list.insertAdjacentHTML("beforeend", html)
    hide();
}