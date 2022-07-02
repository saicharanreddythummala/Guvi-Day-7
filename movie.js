// a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

var mov = new movie("Casino Royale", "Eon Productions", "PG13");
console.log(mov);

// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

var mov = new movie("Casino Royale", "Eon Productions", "PG13");
console.log(mov);

// c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
  getPG(arr) {
    let result = [];
    arr.filter((movie) => {
      if (movie.rating === "PG") {
        result.push(movie);
      }
    });
    return result;
  }
}

const movie1 = new movie("Casino Royale", "Eon Productions", "PG13");
const movie2 = new movie("doctor", "test", "PG");
const movie3 = new movie("kathi", "gen", "PG13");

let movarr = [movie1, movie2, movie3];
console.log(movie.getPG(movarr));

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

var mov = new movie("Casino Royale", "Eon Productions", "PG13");
console.log(mov);
