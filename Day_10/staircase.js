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

// Complete the staircase function below.
function staircase(rows) {
    for(let i=1; i<=rows;i++) {
         var pattern="";
      for(let j=i;j<rows;j++) {
           pattern+=" "; 
      }
      
      for(let j=1;j<=i;j++) {
            pattern+="#";
         
      }
        console.log(pattern); 
    } 
    /* for(let i=0 ; i<rows ;i++){
        
            for(let j = 0; j <= rows-i-2; j++){
                console.log(" ");
            }
            for(let j = rows-i-1 ; j< rows; j++){
                console.log("#");
            }
                console.log();
        }*/
}

function main() {
    const rows = parseInt(readLine(), 10);

    staircase(rows);
}
