//required node liri.js movie-this '<movie name here>'

var axios = require("axios");

var MOVIE = function() {
  this.findMovie = function(search) {
    var movieUrl = `http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`

    axios
    .get(movieUrl)
    .then(
      function (response) {
        console.log(response.data.Title)
        console.log(response.data.Year)
        console.log(response.data.imdbRating)
        console.log(response.data.Ratings[2].Value)
        console.log(response.data.Country)
        console.log(response.data.Language)
        console.log(response.data.Plot)
        console.log(response.data.Actors)
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
