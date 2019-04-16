require("dotenv").config();
var MOVIE = require("./movie.js");
var BAND = require("./band.js");
var SONGS = require("./spotify.js");
// var keys = require("./keys.js");
var fs = require("fs");
// var spotify = new Spotify(keys.spotify);
var selector = process.argv[2];
var search = process.argv.slice(3).join(" ");
var movie = new MOVIE();
var band = new BAND();
var song = new SONGS();
 
switch(selector){
    case "concert-this":
    band.findConcert(search);
    break;
    case "movie-this":
    movie.findMovie(search);
    break;
    case "spotify-this-song":
    song.findSong(search);
    break;
}

fs.appendFile("log.txt", "\n" + search , function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("log.txt was updated!");
  });



//node liri.js do-what-it-says

