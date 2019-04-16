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
 

if (selector === "concert-this"){
    console.log("Searching for Concerts ")
    console.log("Band is " + search)
    band.findConcert(search);
}
if (selector === "movie-this"){
    console.log("Searching for Movie");
    console.log("Movie is " + search);
    movie.findMovie(search);
}
if (selector === "spotify-this-song"){
    console.log("Searching for Songs")
    console.log("Song is " + search)
    song.findSong(search);
}
if (selector === "do-what-it-says"){
    console.log("Searching for Something")
    console.log("That something is " + search)
}



fs.appendFile("log.txt", "\n" + search , function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("log.txt was updated!");
  });







//node liri.js do-what-it-says

