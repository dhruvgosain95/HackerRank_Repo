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

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var minimum=scores[0],maximum=scores[0];
    var count_i=0,count_j=0;
for(var index=0;index<scores.length;index++)
    {
        if(maximum < scores[index]) {
                maximum=scores[index];
                count_i++;
            }
         if(minimum > scores[index]) {
                minimum=scores[index];
                count_j++;
            }
    }
    var result=[];
    result[0]=count_i;
    result[1]=count_j;
    return result;
    
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}