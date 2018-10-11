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

// Complete the cavityMap function below.
function cavityMap(grid) {
    
     for(var i=1;i<grid.length-1;i++)
        {
            var s1=grid[i];
            var s2=grid[i-1];
            var s3=grid[i+1];
            for(var j=1;j<s1.length-1;j++)
            {
                if((s1[j]>s1[j-1])&&(s1[j]>s1[j+1])&&(s1[j]>s2[j])&&(s1[j]>s3[j]))
                   {
                       s1=s1.substring(0,j)+"X"+s1.substring(j+1);
                   }
            }
            grid[i]=s1;
        }
    
        return grid;


}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    let grid = [];

    for (let i = 0; i < n; i++) {
        const gridItem = readLine();
        grid.push(gridItem);
    }

    let result = cavityMap(grid);

    ws.write(result.join("\n") + "\n");

    ws.end();
}
