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

// Complete the theLoveLetterMystery function below.
function theLoveLetterMystery(s){
    
    var middleLetter= Math.floor(s.length/2);
    var codeFront=0;
    var codeRear=0;
    var oper=0;
    
        for(var i=0,j=s.length-1; i<middleLetter; i++,j--){
            if(s.charAt(i)!=s.charAt(j)){
                codeFront= s.charCodeAt(i);
                codeRear= s.charCodeAt(j);
                oper= oper + Math.abs(codeFront-codeRear);            
            }
        }
        return oper;   
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = theLoveLetterMystery(s);

        ws.write(result + "\n");
    }

    ws.end();
}