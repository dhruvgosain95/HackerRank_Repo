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

// Complete the pangrams function below.
function pangrams(s) {

     s = s.replace(/ /g, ''); 
        s = s.toLowerCase();
        
        var  set = [];
        var result = "";
        for(var i = 0 ; i < s.length ; i++) {
            set.push(s.charAt(i));
        }
    
    var uniqueValues = [...new Set(set)]; 
        if(uniqueValues.length == 26) {
            result = "pangram";
        }else{
            result = "not pangram";
        }

        return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = pangrams(s);

    ws.write(result + "\n");

    ws.end();
}