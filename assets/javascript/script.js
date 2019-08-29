var character = "Captain America"
var gameDisplay = "";
//should programatically set this to update the html
var guesses = 5;


document.onkeyup = function(event){
    keyPressed = event.key;
    character = character.toLowerCase();

    if(character.includes(keyPressed)){
        var guessedLetters = document.getElementById("guessedLetters");
        guessedLetters.textContent += keyPressed;

        for (let i = 0; i < character.length; i++) {
            if(character[i] === keyPressed){
                gameDisplay[i] = keyPressed;
            }
        }
    }else{
        var guessesRemaining = document.getElementById("guessesRemaining");
        guessesRemaining.textContent = guesses--;
    }

    var result = document.getElementById("wordToGuess");
    result.textContent = gameDisplay;

}

