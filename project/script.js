// let movieName = prompt("Name of the last movie you watched?", "Titanic"),
//     userRate = prompt("Your rate? (0 - 10)", "10");

const personaMovieDB = {
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
        personaMovieDB.movies[movieName] = userRate;
        console.log(personaMovieDB);
        counter--;
    } else {
        console.log("Error, try it again!");
        counter++;
    }
}