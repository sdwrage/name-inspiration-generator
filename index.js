var rndSong = require('rnd-song');

var nameLength = Math.floor((Math.random() * 12) + 6);
if(process.argv[2] !== "false" && typeof process.argv[2] !== 'undefined') {
    nameLength = parseInt(process.argv[2])
};   
var reversed = process.argv[3] === "false" ? false: true;

var options = {
    api_key: 'REPLACE-ME',
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