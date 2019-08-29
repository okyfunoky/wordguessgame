var game = {
    guesses: 0,
    totalGuesses: 10,
    isOver: false,
    movies: [
        { name: "Avengers", backgroundLink: "foo", hint: "", selected: false },
        { name: "Captain America: The First Avenger", backgroundLink: "", hint: "", selected: false },
        { name: "Thor", backgroundLink: "", hint: "", selected: false },
        { name: "Thor: The Dark World", backgroundLink: "", hint: "", selected: false },
        { name: "Thor: Ragnarock", backgroundLink: "", hint: "", selected: false },
        { name: "Iron Man", backgroundLink: "", hint: "", selected: false },
    ],
    guessedLetters: [],
}

console.log("Logging name " + game.movies[0].name);
console.log("Logging link " + game.movies[0].backgroundLink);

playGame();


function playGame() {
    //TODO: Choose a movie
    //chooseMovie();
    //TODO: Check if chosen letter is in movie
    //TODO: If in, update HTML
    //TODO: If not, increment wrong counter
    //If out of guesses, fail
    currentMovie = game.movies[1]
    var placeholder = resetGame(currentMovie);

    document.onkeyup = function(event){
        var keyPressed = event.key;

        if(!game.guessedLetters.includes(keyPressed)){
            game.guessedLetters.push(keyPressed);
        }

        currentName = currentMovie.name.toLowerCase();
        console.log("Current Name:" + currentName);
        console.log("Key Pressed " + keyPressed);

        if(currentName.includes(keyPressed)) {
            console.log("Got into loop");
            for (let index = 0; index < currentName.length; index++) {

                if(keyPressed === currentName[index]){
                    console.log("Placeholder before:" + placeholder)
                    placeholder[index] = keyPressed;
                    console.log("Placeholder after:" + placeholder)
                    var movieToGuess = document.getElementById("wordToGuess");
                    movieToGuess.textContent = placeholder;
                }   
                
            }
        }


        else{
            document.getElementById("guessedLetters").textContent += " " + keyPressed;
            game.guesses++;
            if(game.guesses > game.totalGuesses){
                
            }
        }
    }
};

function chooseMovie() {
    var randomNumber = Math.floor(Math.random() * game.movies.length);
    console.log(randomNumber)

    if(!game.movies[randomNumber].selected){
        game.movies[randomNumber].selected = true;
        resetGame(game.movies[randomNumber]);
    }
    else {
        chooseMovie();
    }
}; 

function resetGame(movie) {
    console.log(movie);
    game.guesses = 0;
    var guessesRemaining = document.getElementById("guessesRemaining");
    guessesRemaining.textContent = game.totalGuesses;
    var placeholder = ""
    
    for (let index = 0; index < movie.name.length; index++) {
        console.log(movie.name[index])
        if(movie.name[index] !== ' ' && movie.name[index] !== ':' ){
            placeholder += "_"
        }else{
            placeholder += movie.name[index];
        }

    var movieToGuess = document.getElementById("wordToGuess");
    console.log(placeholder);
    movieToGuess.textContent = placeholder;
    return placeholder;
}

    //TODO: Empty existing spans
    //TODO: Update spans with reset values
    //TODO: Reset values (guesses)
};

function updateGuessedLetters() {

};

function updateSolution() {

};

function incrementWrongCounter(){

};

function checkForVictory() {

};