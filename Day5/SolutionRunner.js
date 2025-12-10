const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');

function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8');
    const db = input.split('\n');
    return db;
}

function main() {
    const inputFilePath = path.join(__dirname, '/input.txt');
    const db = parseInput(inputFilePath);
    let res = solution(db);
    console.log('Total fresh ingredients:', res);
}

main();