const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');

function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8');
    const homework = input.split('\n');
    return homework;
}

function main() {
    const inputFilePath = path.join(__dirname, '/example.txt');
    const homework = parseInput(inputFilePath);
    let res = solution(homework);
    console.log('Grand Total:', res);
}

main();