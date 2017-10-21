#! /usr/bin/env node

const fs = require('fs');
const argv = require('yargs').argv;

const homePath = process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE;

const keyPath = homePath + '/.inspireme-key';

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
