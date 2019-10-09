
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = Math.floor(Math.random() * alphabet.length);
var userChoice;
var userChoiceLocation = document.getElementById("userGuess")
var remainingGuessLocation = document.getElementById("remainingGuess")
var remainingGuess = 10;

document.onkeyup = function (event) {

    var userChoice = event.key.toLowerCase()
    userChoiceLocation.innerHTML = userChoice
    remainingGuess = remainingGuess - 1
    remainingGuessLocation.innerHTML = remainingGuess

}
