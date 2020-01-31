#!/usr/bin/env ts-node
const [, , curl] = process.argv;

const formattedCurl = curl
  .replace('?', '$&\\\n')
  .replace(/&/g, '$&\\\n')
  .replace(/ (-H)/g, ' \\\n$1');

console.log(formattedCurl);

