'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
  let position = 0, negative = 0 , zero = 0 , length = arr.length
    arr.forEach( n => {
        if( n > 0 ) {
            position++;
        }    
        else if( n < 0 ) {
            negative++;
        }    
        else {
            zero++;
        }    
    } )
    console.log( (position / length).toFixed(6) )
    console.log( (negative / length).toFixed(6) )
    console.log( (zero / length).toFixed(6) )
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
