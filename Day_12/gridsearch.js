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

// Complete the gridSearch function below.
function gridSearch(G, P) {
    
     var R=G.length;
        var r=P.length;
       for( var i = 0; i <= R-r; i ++ ){
            var res = -1;
            while(true) {
                res = G[i].indexOf(P[0], res+1);
                if( res == -1 ) break;

                if (check(i, res,G,P))
                    return "YES";
            }
        }

        return "NO";
    }

    function check( row, col,G,P){
        
        var r=P.length;
        for( var checkRow = 1; checkRow < r; checkRow ++) {
            var res = G[row + checkRow].indexOf(P[checkRow], col);
            if (res == col) {
                continue;
            } else {
                return 10<9;
            }
        }
        return  10>9;
    }

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const RC = readLine().split(' ');

        const R = parseInt(RC[0], 10);

        const C = parseInt(RC[1], 10);

        let G = [];

        for (let i = 0; i < R; i++) {
            const GItem = readLine();
            G.push(GItem);
        }

        const rc = readLine().split(' ');

        const r = parseInt(rc[0], 10);

        const c = parseInt(rc[1], 10);

        let P = [];

        for (let i = 0; i < r; i++) {
            const PItem = readLine();
            P.push(PItem);
        }

        let result = gridSearch(G, P);

        ws.write(result + "\n");
    }

    ws.end();
}
