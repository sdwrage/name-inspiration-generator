#! /usr/bin/env node

var fs = require('fs');

var home = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

fs.writeFile(home + "/.inspireme-key", process.argv[2], function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Your API key has been set!");
}); 