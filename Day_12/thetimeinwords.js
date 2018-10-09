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

// Complete the timeInWords function below.
function timeInWords(h, m) {
    
     var time =["","one","two","three","four","five","six","seven",
       "eight","nine","ten","eleven","twelve","thirteen","fourteen",
       "quarter","sixteen","seventeen","eighteen","nineteen", "twenty",
       "twenty one", "twenty two", "twenty three", "twenty four", "twenty five",
       "twenty six", "twenty seven", "twenty eight", "twenty nine"];
          
           var result =""; 
    if(m == 0) {
        result = time[h] + " o\' clock";
    }else if(m > 30) {
        if(m == 45){
            result = ("quarter to " + time[h + 1]);
        }
        else{
            result = (time[(60 - m)] + " minutes to " + time[h + 1]);
        }
    }else if(m < 30){
        if(m == 15){
            result = ("quarter past " + time[h]);
        }
        else{
            if(m<10){
            result = (time[m] + " minute past " + time[h]);    
            }
            else{
            result = (time[m] + " minutes past " + time[h]);
            }
        }
    }else{
        result = ("half past " + time[h]);
    }
        return result;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = parseInt(readLine(), 10);

    const m = parseInt(readLine(), 10);

    let result = timeInWords(h, m);

    ws.write(result + "\n");

    ws.end();
}