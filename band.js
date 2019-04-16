//required node liri.js concert-this <artist/band name here>

var axios = require("axios");
var moment = require('moment');
moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
var BAND = function() {
    this.findConcert = function(search) {
      var bandUrl = `https://rest.bandsintown.com/artists/${search}/events?app_id=codingbootcamp`
  
      axios
      .get(bandUrl)
      .then(
        function (response) {
            // for (var i =0; i < response.data.length; i++)
          console.log(response.data[1].venue.name);
          console.log(response.data[1].venue.city);
          console.log(response.data[1].venue.country);
          var time = response.data[1].datetime;
          var timedisplay = moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a");
          console.log(timedisplay);
        }
      )
    };
  };
module.exports = BAND;


// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")