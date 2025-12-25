const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');

function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8');
    const diagram = input.split('\n').map((line) => line.split(''));
    return diagram;
}

function main() {
    const inputFilePath = path.join(__dirname, '/input.txt');
    const diagram = parseInput(inputFilePath);
    let res = solution(diagram);
    console.log('Number of Timelines:', res);
}

main();