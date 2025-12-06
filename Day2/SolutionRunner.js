const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');
// 20738470588 too low
function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8');
    const ranges = input.split(',').filter(range => range.trim() !== '');
    return ranges;
}

function main() {
    const inputFilePath = path.join(__dirname, '/input.txt');
    const ranges = parseInput(inputFilePath);
    let res = 0;
    ranges.forEach(range => {
      res += solution(range);
    });
    console.log('Sum of invalid ids:', res);
}

main();