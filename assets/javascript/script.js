var characters = ["Captain America", "Black Panther","Iron Man","Thor","Black Widow","Hawkeye","Doctor Strange","The Wasp","Spider-Man","Star-Lord","Captain Marvel", "Valkyrie"]

var randomNumber = Math.floor(Math.random() * characters.length);
console.log("random: " + randomNumber);

var character = characters[randomNumber];
var guesses = 5;
var victoryCount = 0;
var placeholderArray = createPlaceholderArray(character);
updateWordToGuess(placeholderArray);
var guessesRemaining = document.getElementById("guessesRemaining");
guessesRemaining.textContent = guesses;
var gameOver = false;

document.onkeyup = function(event){


    if(gameOver){
        randomNumber = Math.floor(Math.random() * characters.length);
        console.log("random: " + randomNumber);

        character = characters[randomNumber];

        placeholderArray = createPlaceholderArray(character);
        updateWordToGuess(placeholderArray);
        guessesRemaining = document.getElementById("guessesRemaining");
        guessesRemaining.textContent = guesses;

        guessedLetters = document.getElementById("guessedLetters");
        guessedLetters.textContent = "";
        guesses = 5;
        gameOver = false;
    }

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
    updateHeroImage(result, character);
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
        return "win";
    }
}

function updateHeroImage(result, character){
    if(result === "win"){
        console.log(character);
        character = character.replace("-","");
        character = character.replace(" ","");
        console.log(character)
        var pictureUrl = character + ".jpg"
        
        console.log("url " + pictureUrl);
        var background = document.getElementById("heroImage");
        background.style = "background-image: url('./assets/images/" + pictureUrl + "'); background-repeat:no-repeat;";
        victoryCount++;
        var victoryCountElement = document.getElementById("victoryCount");
        victoryCountElement.textContent = victoryCount;
        gameOver = true;


    }else if(result === "lose"){
        //thanos
        var background = document.getElementById("heroImage");
        background.style = "background-image: url('./assets/images/thanos.jpg'); background-repeat:no-repeat;";
        gameOver = true;
    }


}