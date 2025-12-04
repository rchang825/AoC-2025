// read each line of input.js and call solution.js solution() on it
// return the final position
const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');

function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8');
    const lines = input.split('\n').filter(line => line.trim() !== '');
    return lines;
}

function main() {
    const inputFilePath = path.join(__dirname, '/input.txt');
    const lines = parseInput(inputFilePath);
    let curr = 50;
    let password = 0;
    lines.forEach(line => {
      [curr, password] = solution(line, curr, password);
    });
    console.log('Password:', password);
}

main();