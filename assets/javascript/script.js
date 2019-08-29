console.log("start");

var characters = ["Captain America", "Black Panther","Iron Man","Thor","Black Widow","Hawkeye","Doctor Strange","The Wasp","Spider-Man","Star-Lord","Captain Marvel", "Valkyrie"]
// var pictures = [
//     {name: "captainamerica", url: "captainamerica.jpg"},
//     {name: "blackpanther", url: ""},
//     {name: "ironman", url: "ironman.jpg"},
//     {name: "thor", url: "thor.jfif"},
//     {name: "blackwidow", url: "blackwidow.jpg"},
//     {name: "hawkeye", url: "hawkeye.webp"},
//     {name: "doctorstrange", url: "doctorstrange.png"},
//     {name: "thewasp", url: ""},
//     {name: "spiderman", url: "spiderman.jpg"},
//     {name: "starlord", url: ""},
//     {name: "captainmarvel", url: ""},
//     {name: "valkyrie", url: ""},
// ]

// var game = {
//     captainamerica: {
//         name: "Captain America",
//         url: "captainamerica.jpg",
//     },
//     ironman: {
//         name: "Iron Man",
//         url: "ironman.jph"
//     },
//     blackpanther: {
//         name: "Black Panther",
//         url: ""
//     },
//     thor: {
//         name: "Thor",
//         url: "thor.jfif"
//     },
//     blackwidow: {
//         name: "Black Widow",
//         url: "blackwidow.jpg"
//     },
//     hawkeye: {
//         name: "Hawkeye",
//         url: "hawkeye.webp"
//     },
//     doctorstrange: {
//         name: "Doctor Strange",
//         url: "doctorstrange.png"
//     },
//     spiderman: {
//         name: "Spider-Man",
//         url: "spiderman.jpg"
//     },
//     starlord: {
//         name: "Star-Lord",
//         url: ""
//     },
//     captainmarvel: {
//         name: "Captain Marvel",
//         url: ""
//     },
//     valkyrie: {
//         name: "Valkyrie",
//         url: ""
//     }
// }

var character = characters[11];
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

    }else if(result === "lose"){
        //thanos
        var background = document.getElementById("heroImage");
        background.style = "background-image: url('./assets/images/thanos.jpg'); background-repeat:no-repeat;";
    }


}