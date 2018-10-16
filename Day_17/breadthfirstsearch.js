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

// Complete the bfs function below.
function bfs(n, m, edges, s) {
    var pred = new Array();
    var flag = new Array();
    for (let i=0; i <= n; i++) {
        flag[i] = false;
        pred[i] = -1;
    }
    var queue = new Array();
    let data = s;
    flag[data] = true;
    queue.push(data);
    while (queue.length > 0) {
        var v= queue.shift();
        var adjs = new Array();
        edges.forEach(sp => {
            if (sp[0] == v || sp[1] == v) {
                let diff = sp[0] != v ? sp[0] : sp[1];
                if (flag[diff] == false) {
                    adjs.push(diff);
                }
            }
        });
        adjs.forEach(item => {
            if (!flag[item]) {
                flag[item] = true;
                pred[item] = v;
                queue.push(item);
            }
        })
    }
    var result = new Array();
    for (let i=1; i <= n; i++) {
        if (data != i) {
            let sumDistance = 0;
            let c = i;
            while(pred[c] != -1) {
                sumDistance += 6;
                c = pred[c];
            }
            if (sumDistance == 0) {
                result.push(-1)
            }
            else {
                result.push(sumDistance);
            }
        }
    }
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine(), 10);

        let result = bfs(n, m, edges, s);

        ws.write(result.join(" ") + "\n");
    }

    ws.end();
}
