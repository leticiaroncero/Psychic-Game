
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
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

    var userChoice = event.key.toUpperCase();

    if (alphabet.indexOf(userChoice) == -1) {
        return;        
    }
  
    var addChoice = document.createElement("button");
    addChoice.innerHTML = userChoice;
    userChoiceLocation.appendChild(addChoice);
    remainingGuess = remainingGuess - 1;
    remainingGuessLocation.innerHTML = remainingGuess;

    if (userChoice == computerChoice) {
        wins = wins + 1
        winsLocation.innerHTML = wins
        remainingGuess = 10
        remainingGuessLocation.innerHTML = remainingGuess
        userChoiceLocation.innerHTML = ""
        randomPosition = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomPosition]
    } else if (remainingGuess == 0) {
        losses = losses + 1
        lossesLocation.innerHTML = losses
        remainingGuess = 10
        remainingGuessLocation.innerHTML = remainingGuess
        userChoiceLocation.innerHTML = ""
        randomPosition = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomPosition]
    }

}