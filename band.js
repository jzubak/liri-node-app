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
            var output = response.data
            // var count = 0;
            // for (var i = 0; i < output[count].length; i++){
            console.log(`the next ${search} concert is:`)
          console.log(output[0].venue.name);
          console.log(response.data[0].venue.city);
          console.log(response.data[0].venue.country);
          var time = response.data[0].datetime;
          var timedisplay = moment(time).format("dddd, MMMM Do YYYY, h:mm:ss a");
          console.log(timedisplay);
        //   count++
            // };
        }
      )
    };
  };
module.exports = BAND;


// Name of the venue
// Venue location
// Date of the Event (use moment to format this as "MM/DD/YYYY")