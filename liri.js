require("dotenv").config();
var MOVIE = require("./movie.js");
var BAND = require("./band.js");
var SONGS = require("./spotify.js");
// var READ = require("./doit.js");
var fs = require("fs");
// var spotify = new Spotify(keys.spotify);
var selector = process.argv[2];
var search = process.argv.slice(3).join(" ");
var movie = new MOVIE();
var band = new BAND();
var song = new SONGS();
// var doit = new READ();

switch (selector) {
    case "concert-this":
        band.findConcert(search);
        break;
    case "movie-this":
        movie.findMovie(search);
        break;
    case "spotify-this-song":
        song.findSong(search);
        break;
    case "do-what-it-says":
        fs.readFile("random.txt", "utf8", function (err, data) {
            if (err) {
                return console.log(err);
            }
            console.log(data);
            var dataArr = data.split(",");
            var selector2 = dataArr[0];
            var search2 = dataArr[1];
            console.log(dataArr);
            switch (selector2) {
                case "concert-this":
                    band.findConcert(search2);
                    break;
                case "movie-this":
                    movie.findMovie(search2);
                    break;
                case "spotify-this-song":
                    song.findSong(search2);
                    break;
            };
        });
        break
}

fs.appendFile("log.txt", `you used ${selector} to search for ${search}\n`, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log("log.txt was updated!");
});



//node liri.js do-what-it-says

