let numberOfFilms = prompt("How many movies you watched?", "10");


const personaMovieDB = {
    count: +numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    homePrivat: false
};

let counter = true;

let counterTwo = true;

// for (let i = 0; i <= counter; i++) {
//    const movieName = prompt("Name of the last movie you watched?", "Titanic"),
//    userRate = prompt("Your rate? (0 - 10)", "10");
//     if (movieName != '' && movieName != null && userRate != '' && 
//        userRate != null && movieName.length < 50) {
//         personaMovieDB.movies[movieName] = +userRate;
//         counter--;
//     } else {
//         console.log("Error, try again!");
//         counter++;
//     }
// }

// while (counter) {
//     const movieName = prompt("Name of the last movie you watched?", "Titanic"),
//           userRate = prompt("Your rate? (0 - 10)", "10");
//     if (movieName != '' && movieName != null && userRate != '' && 
//         userRate != null && movieName.length < 50) {
//         personaMovieDB.movies[movieName] = +userRate;
//         counter = false;
//     } else {
//         console.log("Error, try again!");
//     }
// }


do {
    const movieName = prompt("Name of the last movie you watched?", "Titanic"),
          userRate = prompt("Your rate? (0 - 10)", "10");
    if (movieName != '' && movieName != null && userRate != '' && 
        userRate != null && movieName.length < 50) {
        personaMovieDB.movies[movieName] = +userRate;
        counter = false;
    } else {
        console.log("Error, try again!");
    }
}
while (counter);


// if (personaMovieDB.count > 0 && personaMovieDB.count < 10) {
//     console.log("Not many films :(");
// } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
//     console.log("Classic.");
// } else if (personaMovieDB.count > 30){
//     console.log("Very good!");
// } else {
//     console.log("Try again!");
// }

// while (counterTwo) {
//     if (personaMovieDB.count > 0 && personaMovieDB.count < 10) {
//         console.log("Not many films :(");
//         counterTwo = false;
//     } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
//         console.log("Classic.");
//         counterTwo = false;
//     } else if (personaMovieDB.count > 30) {
//         console.log("Very good!");
//         counterTwo = false;
//     } else {
//         console.log("Try again!");
//         counterTwo = false;
//     }
// }

do {
    if (personaMovieDB.count > 0 && personaMovieDB.count < 10) {
        console.log("Not many films :(");
        counterTwo = false;
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count <= 30) {
        console.log("Classic.");
        counterTwo = false;
    } else if (personaMovieDB.count > 30){
        console.log("Very good!");
        counterTwo = false;
    } else {
        console.log("Try again!");
        counterTwo = false;
    }
}
while (counterTwo);


console.log(personaMovieDB);
