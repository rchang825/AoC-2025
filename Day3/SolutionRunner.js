const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');

function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8');
    const ranges = input.split('\n').filter(range => range.trim() !== '');
    return ranges;
}

function main() {
    const inputFilePath = path.join(__dirname, '/input.txt');
    const banks = parseInput(inputFilePath);
    let res = 0;
    banks.forEach(bank => {
      // console.log('for bank', bank);
      let voltage = solution(bank);
      // console.log('adding', voltage);
      res += voltage;
    });
    console.log('Total output joltage:', res);
}

main();