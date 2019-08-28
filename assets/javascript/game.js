var game = {
    guesses: 0,
    totalGuesses: 10,
    hasWon: false,
    movies: [
        { name: "Avengers", backgroundLink: "foo", hint: "", selected: false },
        { name: "Captain America: The First Avenger", backgroundLink: "", hint: "", selected: false },
        { name: "Thor", backgroundLink: "", hint: "", selected: false },
        { name: "Thor: The Dark World", backgroundLink: "", hint: "", selected: false },
        { name: "Thor: Ragnarock", backgroundLink: "", hint: "", selected: false },
        { name: "Iron Man", backgroundLink: "", hint: "", selected: false },
    ]

}

console.log("Logging name " + game.movies[0].name);
console.log("Logging link " + game.movies[0].backgroundLink);

document.onkeyup = function(event) {
    playGame();
}

function playGame() {
    //TODO: Choose a movie
    chooseMovie();
    //TODO: Check if chosen letter is in movie
    //TODO: If in, update HTML
    //TODO: If not, increment wrong counter
    //If out of guesses, fail

};

function chooseMovie() {
    var randomNumber = Math.floor(Math.random() * game.movies.length);
    console.log(randomNumber)


    if(!game.movies[randomNumber].selected){
        game.movies[randomNumber].selected = true;
        resetGame(game.movies[randomNumber]);
    }
    else{
        chooseMovie();
    }
}; 

function resetGame(movie) {
    game.guesses = 0;
    var guessesRemaining = document.getElementById("guessesRemaining");
    guessesRemaining.textContent = game.totalGuesses;
    var movieToGuess = document.getElementById("wordToGuess");
    movieToGuess.textContent = movie.name;
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