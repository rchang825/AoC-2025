const fs = require('fs');
const path = require('path');
const solution = require('./solution.js');

function parseInput(filePath) {
    const input = fs.readFileSync(filePath, 'utf-8');
    const homework = input.split('\n');
    return homework;
}
const inputFilePath = path.join(__dirname, '/example.txt');
const example = parseInput(inputFilePath);

const leftPadded = [
  '123',
  ' 45',
  '  6'
];
// 356 + 24 + 1 = 381
// 356 * 24 * 1 = 8544
const rightPadded = [
  '328',
  '64 ',
  '98 '
];
// 8 + 248 + 369 = 625
// 8 * 248 * 269 = 533824

describe('addition', () => {
  test('works with left padding', () => {
    expect(solution([...leftPadded, '+'])).toEqual(381);
  });

  test('works with right padding', () => {
    expect(solution([...rightPadded, '+'])).toEqual(625);
  });
});
describe('multiplication', () => {
  test('works with left padding', () => {
    expect(solution([...leftPadded, '*'])).toEqual(8544);
  });
});
test('works with multiple problems', () => {
  expect(solution(example)).toEqual(3263827);
});
