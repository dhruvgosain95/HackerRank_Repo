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

const DoublyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
        this.prev = null;
    }
};

const DoublyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        let node = new DoublyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
    }
};

function printDoublyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(String(node.data));

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}
function sortedInsert(head, data) {
    
    
    const node = new DoublyLinkedListNode(data);
        
        if (head == null) {
            head = node;
        } 
    else if ((head.data >=node.data)) {
        head.prev = node;
        node.next = head;  
        head = node; 
    } 
    else { 
        var current = head;
        while (current.next != null &&  
               current.next.data < node.data) 
                current = current.next; 
                node.next = current.next; 
  
        if (current.next != null) 
            node.next.prev = node; 
  
        current.next = node; 
        node.prev = current; 
    } 
return head;
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new DoublyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        const data = parseInt(readLine(), 10);

        let llist1 = sortedInsert(llist.head, data);

        printDoublyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}
