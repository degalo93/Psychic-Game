# Psychic-Game

For this game I attempted to create a game where you the player tries to guess the letter that the program has in mind. 

## The code 

Most of the code that was worked on was on the javascript. I do admit that I had struggled a bit especially with the game logic. At first I had run into some problems with getting the script to show up with the html. 

I had put the `<script type="text/javascript" src="assets/javascript/game.js"></script>` in the head and it would not show any of the work. After sometime I put the script at the bottom of the body and it worked.

### The Javascript 

I had planed out the script following the given prompt. I had planed out what variables I needed and I had a rough idea of the code needed. 

1. I needed to make sure that game would choose a letter at random. 
    `var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];`
2. Next to create a series a variables to such as a win , loss, how many guesses left and the players guesses.

3. Next I needed to figure out the logic of the game itself I first started with some if statements. For the first part I wanted to make a code that would follow the rule if guesses reached 0 then your losses would go up and the code would then tell you the letter it was thinking of. 

`if (guessesleft === 0) {
        losses++;
        guessesleft = 10;
        compChoiceText.textContent = "the computer choose: " + compChoice;
        letterReset.push(random);}`

4. Next I wanted the code that when the player guessed the letter the program choose they would gain a win but if they did not they would lose a guess opportunity.

In the end I still had some trouble with getting the chosen letter to reset. I still plan on working on this project to further improve upon the code 