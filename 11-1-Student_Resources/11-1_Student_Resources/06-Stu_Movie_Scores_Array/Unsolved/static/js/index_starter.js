// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

// count the good (>7), okay 3-7, bad 0-3 movies
for (i=0; i < movieScores.length; i++) {
  var score = movieScores[i];
  sum += score;
  
  if (score > 7) {
    goodMovieScores.push(score);
  }

  else if (score <=7 && score >3){
    okMovieScores.push(score);
  }
  else {
    badMovieScores.push(score);
  }
}

var movieAvg = sum / movieScores.length

console.log(`the Average movie score is ${movieAvg}`)
console.log(`there are ${goodMovieScores.length} good movies`)
console.log(`there are ${okMovieScores.length} ok movies`)
console.log(`there are ${badMovieScores.length} bad movies`)
