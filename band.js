// node liri.js concert-this <artist/band name here>

var axios = require("axios");
var BAND = function() {
    this.findConcert = function(search) {
      // The following URL can be used to search the TV Maze API for a given show
      var bandUrl = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`
  
      axios
      .get(bandUrl)
      .then(
        function (response) {
          console.log(response)
          // console.log(response.data.name)
        }
      )
    };
  };
module.exports = BAND;