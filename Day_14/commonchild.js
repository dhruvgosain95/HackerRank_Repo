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

// Complete the commonChild function below.
function commonChild(a, b) {
    
    
    var len = a.length;
    
    var pre = [];
    var now = [];
    
  
    
    for(var i=0;i<len;i++) pre[i] = 0;
    
 
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            if(a[i].charAt(0) == b[j].charAt(0)){
                if(i==0) now[j] = 1;
                else if(j==0) now[j] = 1;
                else now[j] = pre[j-1] + 1;
            }
            else{
                var max = 0;
                if(i>0 && max < pre[j]) max = pre[j];
                if(j>0 && max < now[j-1]) max = now[j-1];
                if(i>0 && j>0 && max < pre[j-1]) max = pre[j-1];
                now[j] = max;
            }
        }
        for(j=0;j<len;j++)
            pre[j] = now[j];
    }

   
 
    
       return now[len-1];


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s1 = readLine();

    const s2 = readLine();

    let result = commonChild(s1, s2);

    ws.write(result + "\n");

    ws.end();
}