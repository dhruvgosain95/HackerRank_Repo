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

// Complete the flatlandSpaceStations function below.
function flatlandSpaceStations(n, c) {
    
    let m = c.length;
    var max=0;
    if(n === m){
        return 0;
    }
        for(var i=0;i<n;i++){
        var tempLen=0;
        for(var j=0;j<c.length;j++){
            var dist=Math.abs(c[j]-i);
            if(dist==0){
                tempLen=0;
                break;
            }
            if(tempLen==0){
                tempLen=dist;
            }
            else{
                if(tempLen>dist){
                    tempLen=dist;
                }
            }
        }
        if(max<tempLen){
            max=tempLen;
        }
    }
    return max;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = flatlandSpaceStations(n, c);

    ws.write(result + "\n");

    ws.end();
}
