'use strict';

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

// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {
var dist_apple_l=0,dist_apple_u=0,count_apple=0,count_orange=0;
   var dist_orange_l=0,dist_orange_u;
    dist_apple_l=s-a;
    dist_apple_u=t-a;
    for(var index=0;index<apples.length;index++) {
        if(apples[index] > 0 && (apples[index]) >= dist_apple_l && (apples[index])<= dist_apple_u) {
          count_apple++;
        }
    }   
   dist_orange_u=b-s;
    dist_orange_l=b-t; 
    for(var index=0;index<oranges.length;index++){
        if(oranges[index]<0) {
           oranges[index]=-oranges[index];
             if((oranges[index]) >= dist_orange_l && (oranges[index]) <= dist_orange_u){
          count_orange++;
        }
        }
    }
console.log(count_apple);
console.log(count_orange);
}


function main() {
    const st = readLine().split(' ');

    const s = parseInt(st[0], 10);

    const t = parseInt(st[1], 10);

    const ab = readLine().split(' ');

    const a = parseInt(ab[0], 10);

    const b = parseInt(ab[1], 10);

    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const apples = readLine().split(' ').map(applesTemp => parseInt(applesTemp, 10));

    const oranges = readLine().split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

    countApplesAndOranges(s, t, a, b, apples, oranges);
}