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

// Complete the pickingNumbers function below.
function pickingNumbers(a) {
    
    var max = 0,result = 0;
        for(var i = 0 ;i < a.length ;i++) {
            
            if(a[i]>max){
                max=a[i];
            }
        }

    
        var temp = [max+1];
    
    for(var i=0;i<a.length;i++){
            temp[i]=0;
        }

        
        for(var i=0;i<a.length;i++){
            temp[a[i]]++;
        }

    
        for(var i=1;i<max;i++){
            
            var sum = temp[i]+temp[i+1];
            if(sum>result){
                result = sum;
            }
        }
        return result;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = pickingNumbers(a);

    ws.write(result + "\n");

    ws.end();
}