//required node liri.js movie-this '<movie name here>'

var axios = require("axios");

var MOVIE = function() {
  this.findMovie = function(search) {
    var movieUrl = `http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`
  
    axios
    .get(movieUrl)
    .then(
      function (response) {
        var output = response.data
        console.log(output.Title)
        console.log(output.Year)
        console.log(output.imdbRating)
        console.log(output.Ratings[2].Value)
        console.log(output.Country)
        console.log(output.Language)
        console.log(output.Plot)
        console.log(output.Actors)
      }
    )
  };
};

module.exports = MOVIE;


// * Title of the movie.
// * Year the movie came out.
// * IMDB Rating of the movie.
// * Rotten Tomatoes Rating of the movie.
// * Country where the movie was produced.
// * Language of the movie.
// * Plot of the movie.
// * Actors in the movie.
