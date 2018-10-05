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
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function getTotalX(a, b) {
  
     var num1 = a[0];
    for (var i = 1; i < a.length; i++) {
     num1 = lcm(a[i], num1);
    }
    var num = b[0];
    for (var i = 1; i < b.length; i++) {
            num = gcd(b[i], num);
    }
    var counter = 0;
    for(var i=1; i<= num/num1; i++) {
        if(num % (num1*i)==0)
            counter++;
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().split(' ').map(bTemp => parseInt(bTemp, 10));

    let total = getTotalX(a, b);

    ws.write(total + "\n");

    ws.end();
}