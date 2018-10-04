'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the diagonalDifference function below.
function diagonalDifference(arr) {

    var i;
    var difference=0;
    var sum_primary=0;
    var sum_secondary=0;
    
    for(i=0;i<arr.length;i++)
    {
       sum_primary+=arr[i][i];
        sum_secondary+=arr[i][arr.length-i-1];
    }
    if(sum_primary >= sum_secondary){
    difference = sum_primary - sum_secondary;
    }
    else{
        difference = sum_secondary - sum_primary;
    }
return difference;

}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
