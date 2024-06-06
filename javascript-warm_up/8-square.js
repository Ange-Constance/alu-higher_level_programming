#!/usr/bin/node

const firstArg = process.argv[2];

if (isNaN(firstArg)) {
  console.log('Missing size');
} else {
  const n = Number(firstArg);

  let line = '';

  for (let i = 0; i < n; i++) line += 'X';

  for (let i = 0; i < n; i++) console.log(line);
}
