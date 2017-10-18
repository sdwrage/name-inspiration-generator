#! /usr/bin/env node

var rndSong = require('rnd-song');
var yargs = require('yargs').argv;
var fs = require('fs');

var nameLength = Math.floor((Math.random() * 12) + 6);
var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;
var path = home + "/.inspireme-key";

if(yargs.wordcount > 0) {
    nameLength = parseInt(yargs.wordcount);
}

var apikey = '';
if (fs.existsSync(path)) {
    apikey = fs.readFileSync(path, 'utf8');
} else {
    console.log("You need to set your API key with the command: inspireme-addkey ADDYOURKEYHERE");
    process.exit(1);
}

var reversed = yargs.reversed;
var options = {
    api_key: apikey,
    snippet: true,
    language: 'en'
  };
   
rndSong(options, function(err, res) {
    if (!err) {
      var snippet = res.snippet.snippet_body;
      snippet = snippet.replace(/[^a-zA-Z]/g, "").toLowerCase();
      if (reversed) {
          snippet = snippet.split("").reverse().join("");
      }
      var start = Math.floor(Math.random() * ((snippet.length - 1) - nameLength));
      var end = ((start + 1) + nameLength > snippet.length) ? snippet.length - start : start + nameLength;
      console.log(snippet.substring(start, end));
    }
  });