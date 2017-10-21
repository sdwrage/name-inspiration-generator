#! /usr/bin/env node

const fs = require('fs');
const getHomePath = require('home-path');
const argv = require('yargs').argv;

const keyPath = getHomePath() + '/.inspireme-key';

if ('undefined' === typeof argv.key) {
  console.log('Please provide a key, like this: inspireme-addkey --key ACOOLKEYGOESRIGHTHERE');
  process.exit(1);
} else {
  fs.writeFile(keyPath, argv.key, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    console.log(`API key written to: ${keyPath}`);
  });
}
