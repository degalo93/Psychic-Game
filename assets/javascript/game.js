/*//variables
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


var wins = 0;
var losses = 0;
var guessesleft = 10;
var yourguess = 0;
var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var compChoiceText = document.getElementById("compchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesleftText = document.getElementById("guessesLeft-text");
var yourguessText = document.getElementById("yourguess-text");


document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;
    if (!(compChoices.indexOf(userGuess) === -1)) {

        var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];


        if (userGuess === compGuess) {
            wins++;
            guessesleft--;
            yourguess++;

        } else {
            losses++;
            guessesleft--;
            yourguess++;
        }

        if (guessesleft === 0) {
            wins = 0;
            losses = 0;
            guessesleft = 10;
            yourguess = 0;
            resetguess;
        }





        // to display 
        compChoiceText.textContent = "The computer choose " + compGuess;
        directionsText.textContent = "";
        userChoiceText.textContent = "You chose: " + userGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        guessesleftText.textContent = "guesses left: " + guessesleft;
        yourguessText.textContent = "your guesses: " + yourguess;

    }
}; */
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesleft = 10;
var youGuessed = [];
var letterReset = [];

var random = letters[Math.floor(Math.random() * letters.length)];

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
        compChoiceText.textContent = "the computer choose " + compChoice;
        letterReset.push(random);

    }
    if (userGuess === compChoice) {
        wins++;
        youGuessed = [];

    } else {
        guessesleft--;

    }








    directionsText.textContent = " ";
    userChoiceText.textContent = "You chose: " + userGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    guessesleftText.textContent = "guesses left: " + guessesleft;
    youguessedText.textContent = "your guesses: " + youGuessed;




};