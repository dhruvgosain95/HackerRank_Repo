'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
   
    const arCount = parseInt(readLine());
    var sum=0;
    var ar = readLine().split(' ');
    ar=ar.map(Number);
        sum=ar.reduce( (prev,curr) => prev + curr);
    console.log(sum);

   
}