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
            // for (var i =0; i < response.data.length; i++)
          console.log(response.data[1].venue.name);
          console.log(response.data[1].venue.city);
          console.log(response.data[1].venue.country);
          console.log(response.data[1].datetime);
        }
      )
    };
  };
module.exports = BAND;


// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")