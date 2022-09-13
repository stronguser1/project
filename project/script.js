const numberOfFilms = prompt("How many films did you watch?", "5");

const nameOfTheMovie = prompt("Name of the last movie you watched?", "Titanic");

const userRate = prompt("Your rate? (0 - 10)", "10");

const personaMovieDB = {
    count: +numberOfFilms,
    movies: {
        [nameOfTheMovie]: +userRate
    },
    actors: {},
    genres: [],
    privat: false
};

console.log(personaMovieDB.movies);