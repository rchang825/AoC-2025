const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');

function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8');
    const map = input.split('\n').filter(row => row.trim() !== '');
    return map;
}

function main() {
    const inputFilePath = path.join(__dirname, '/input.txt');
    const map = parseInput(inputFilePath);
    let res = solution(map);
    console.log('Total rolls of paper:', res);
}

main();