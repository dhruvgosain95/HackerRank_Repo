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

// Complete the gameOfThrones function below.
function gameOfThrones(s){
    // Complete this function
    var mySet= new Set();
    for(var i=0; i<s.length; i++){
        mySet.add(s.charAt(i));   
    }
    var even=0; 
    var odd=0;
    
    for(var item of mySet){
        var count=0;
     
        for(var i=0; i<s.length; i++){
            if(item==s[i]){
                count++;
            }   
        }
     
        if(count%2==0){
            even++;
        }
        else{
            odd++;
        }
        if(s.length%2==0){
            if(odd>0){
                return "NO";
            }
        }
            else{
                if(odd>1){
                    return "NO";
                }
            }
        
    }
    return "YES";
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = gameOfThrones(s);

    ws.write(result + "\n");

    ws.end();
}