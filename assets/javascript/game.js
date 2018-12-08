
var winsTotal = 0;
var lossesTotal = 0;
var guesses = 10;
var lettersGuessed = [];

var validChoices = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

var random = Math.floor(Math.random() * 26);
var computerChoice = validChoices[random];
console.log('computer: ' + computerChoice);
guesses = 10;
lettersGuessed = [];

function newGame() {
    var random = Math.floor(Math.random() * 26);
    var computerChoice = validChoices[random];
    console.log('computer: ' + computerChoice);
    guesses = 10;
    lettersGuessed = [];
}


document.onkeypress = function (e) {

    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");
    var guessesLeft = document.getElementById("num-guess");
    var userGuesses = document.getElementById("guesses");

    document.getElementById("did-win").textContent = "";
    document.getElementById("repeat-guess").textContent = "";

    // Fix issue of if() statement not checking NEW computer choices

    var userChoice = (e.key).toLowerCase();
            
    if(lettersGuessed.indexOf(userChoice) === -1) {
        console.log("user: " + userChoice);
        lettersGuessed.push(" " + userChoice);
        userGuesses.textContent = lettersGuessed;
    }
            
    else {
        document.getElementById("repeat-guess").textContent = "You already guessed that letter";
    }

    if(userChoice === computerChoice) {
        winsTotal++;
        wins.textContent = winsTotal;
        document.getElementById("did-win").textContent = "You got it!";
        newGame();
    }

    else if(guesses === 0) {
        lossesTotal++;
        losses.textContent = lossesTotal;
        newGame();
    }

    else {
        guesses--;
        guessesLeft.textContent = guesses;
    }
}

