let numberOfFilms = prompt("How many movies you watched?", "10");

const personaMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    homePrivat: false
};

let counter = 0;

for (let i = 0; i <= counter; i++) {
   const movieName = prompt("Name of the last movie you watched?", "Titanic"),
   userRate = prompt("Your rate? (0 - 10)", "10");
    if (movieName != '' && movieName != null && userRate != '' && 
       userRate != null && movieName.length < 50) {
        if (numberOfFilms < 10) {
            console.log("Not many films:(");
        } else if (numberOfFilms >= 10 && numberOfFilms <=30) {
            console.log("Classic.");
        } else {
            console.log("Very good result!");
        }
        personaMovieDB.movies[movieName] = +userRate;
        counter--;
    } else {
        console.log("Error, try again!");
        counter++;
    }
}


if (personaMovieDB.count > 0 && personaMovieDB.count < 10) {
    console.log("Not many films :(");
} else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
    console.log("Classic.");
} else if (personaMovieDB.count > 30){
    console.log("Very good!");
} else {
    console.log("Try again!");
}

console.log(personaMovieDB);
