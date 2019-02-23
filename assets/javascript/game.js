var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesleft = 10;
var youGuessed = " ";
var letterReset = "";

var random = letters[Math.floor(Math.random() * letters.length)];
console.log(random);
var compChoice = random;



var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var compChoiceText = document.getElementById("compchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesLeft-text");
var youGuessedText = document.getElementById("youGuessed-text");

function resetComp() {
    this.letterReset = letters[Math.floor(Math.random() * this.letters.length)];
};

document.onkeyup = function(event) {
    var userGuess = event.key;
    if (guessesleft === 0) {
        losses++;
        guessesleft = 10;
        compChoiceText.textContent = "the computer choose: " + compChoice;
        letterReset.push(random);


    } //else if (userGuess !== random && guessesleft > 0) {
    //guessesleft--;
    //youGuessed = youGuessed + userGuess + " ";
    //}
    if (userGuess === compChoice) {
        wins++;
        youGuessed = [];


    } else {
        guessesleft--;

    }








    directionsText.textContent = " ";
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesleftText.textContent = "Guesses left: " + guessesleft;
    youguessedText.textContent = "Your guesses: " + youGuessed;




};