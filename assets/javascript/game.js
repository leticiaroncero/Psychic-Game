
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomPosition = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomPosition];
var userChoiceLocation = document.getElementById("userGuess");
var remainingGuessLocation = document.getElementById("remainingGuess");
var remainingGuess = 10;
var winsLocation = document.getElementById("wins");
var wins = 0;
var losses = 0;
var lossesLocation = document.getElementById("losses");

document.onkeyup = function (event) {

    var userChoice = event.key.toLowerCase()
    var addChoice = document.createElement("span")
    addChoice.innerHTML = userChoice
    userChoiceLocation.appendChild(addChoice)

    remainingGuess = remainingGuess - 1
    remainingGuessLocation.innerHTML = remainingGuess

    if (userChoice == computerChoice) {
        wins = wins + 1
        winsLocation.innerHTML = wins
        remainingGuess = 10
        remainingGuessLocation.innerHTML = remainingGuess
        randomPosition = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomPosition]
    } else if (remainingGuess == 0) {
        losses = losses + 1
        lossesLocation.innerHTML = losses
        remainingGuess = 10
        remainingGuessLocation.innerHTML = remainingGuess
        randomPosition = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomPosition]
    }

}