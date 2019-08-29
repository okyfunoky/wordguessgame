var characters = ["Captain America", "Black Panther","Iron Man","Thor","Black Widow","The Hulk","Hawkeye","Doctor Strange","The Wasp", "Ant Man","Spider-Man","Star-Lord",""]




var character = characters[10];
var guesses = 5;
var placeholderArray = createPlaceholderArray(character);
updateWordToGuess(placeholderArray);
var guessesRemaining = document.getElementById("guessesRemaining");
guessesRemaining.textContent = guesses;

document.onkeyup = function(event){
    keyPressed = event.key;
    character = character.toLowerCase();

    if(character.includes(keyPressed)){
        for (let i = 0; i < character.length; i++) {
            if(character[i] === keyPressed){
                placeholderArray[i] = keyPressed;
                console.log("setting value: " + placeholderArray[i] + "to key");
                console.log("GameDisplay variable: " + placeholderArray);
            }
        }
    }else {
        guesses--;
        guessesRemaining.textContent = guesses;
    }
    var guessedLetters = document.getElementById("guessedLetters");
    guessedLetters.textContent += keyPressed;

    updateWordToGuess(placeholderArray);
    var result = checkForWinLoss();
    console.log(result);
}

function updateWordToGuess(update){
    var result = document.getElementById("wordToGuess");
    var updateString = "";

    for (let i = 0; i < update.length; i++) {
        updateString += update[i];
    }

    result.textContent = updateString;
}

function createPlaceholderArray(character){
    var placeholderArray = [];
    for (let i = 0; i < character.length; i++) {
        if(character[i] === " " ){
            placeholderArray.push(" ");
        }else if(character[i] === "-"){
            placeholderArray.push("-")
        }else
        {
            placeholderArray.push("_");
        }
    }
    return placeholderArray;
}

function checkForWinLoss(){
    if(guesses <= 0){
        return "lose";
    }

    if(placeholderArray.indexOf("_") === -1){
        return "Win";
    }
}