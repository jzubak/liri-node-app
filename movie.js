//node liri.js movie-this '<movie name here>'

var axios = require("axios");
var MOVIE = function() {
  this.findMovie = function(search) {
    // The following URL can be used to search the TV Maze API for a given show
    var movieUrl = `http://www.omdbapi.com/?t=${search}&y=&plot=short&apikey=trilogy`

    axios
    .get(movieUrl)
    .then(
      function (response) {
        console.log(response.data.name)
        // console.log(response.data.name)
      }
    )
  };
};

module.exports = MOVIE;