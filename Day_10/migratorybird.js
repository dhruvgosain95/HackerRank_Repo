'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    
    var result = [0,0,0,0,0];
        
        for(var i = 0;i<arr.length;i++) {
            
            switch (arr[i]){
            case 1 :
                result[0]++;
                break;
            case 2 :
                result[1]++;
                break;
            case 3 :
                result[2]++;
                break;
            case 4 :
                result[3]++;
                break;
            case 5 :
                result[4]++;
                break;
            }
        }
        console.log(result);
        var highest = 0;
        var answer = 0;
        for(var i = 0;i<result.length;i++){
            if(result[i]>highest){
                highest = result[i];
                answer= i+1;
            }
        }
        return answer;


}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = migratoryBirds(arr);

    ws.write(result + '\n');

    ws.end();
}