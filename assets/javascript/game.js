
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = Math.floor(Math.random() * alphabet.length);
var userChoice;
var userChoiceLocation = document.getElementById("userGuess")

document.onkeyup = function(event) {
    
    var userChoice = event.key
    userChoiceLocation.textContent = userChoice

}
