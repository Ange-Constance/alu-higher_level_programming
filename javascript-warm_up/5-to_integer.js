#!/usr/bin/node

const firstArg = process.argv[2];

console.log(isNaN(firstArg) ? 'Not a number' : 'My number: ' + firstArg);
