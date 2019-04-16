//node liri.js spotify-this-song '<song name here>'

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var SONGS = function () {
    this.findSong = function (search) {
        spotify.search({ type: 'track', query: search })
            .then(function (response) {
                console.log(response.tracks.items[0].artists[0].name);
                console.log(response.tracks.items[0].name);
                console.log(response.tracks.items[0].preview_url);
                console.log(response.tracks.items[0].album.name);
            })
            .catch(function (err) {
                console.log(err);
            });
    };
};
module.exports = SONGS;

// Artist(s)
// The song's name
// A preview link of the song from Spotify
// The album that the song is from