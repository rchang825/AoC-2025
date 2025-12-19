function solution(homework) {
  // number of operands in each problem = total lines - 1
  // number of problems = number of operation symbols on last line of input
  const n = homework.length - 1;
  // console.log(homework);
  homework = homework.map(line => line.split(''));
  // let numProblems = 0;
  // homework[n].forEach((ch) => { if (ch !== ' ') {
  //     numProblems++;
  //   }
  // });
  // console.log(homework);
  // console.log('num Problems', numProblems);
  let total = 0;
  let length = 0;
  homework.forEach((row) => {
    length = Math.max(length, row.length);
  });
  // helper solve(column)
  function solve(start, end) {
    function sum(operands) {
      return operands.reduce((sum, num) => {
        return sum + Number(num);
      });
    }
    function product(operands) {
      return operands.reduce((product, num) => {
        return product * Number(num);
      });
    }
    // console.log('solving problem from', start, 'to', end);
    // find operation
    const op = homework[n][start];
    const operands = new Array(end - start).fill(0);
    // define answer
    // build operands by *= 10 and adding digit
    for (var i = start; i < end; i++) {
      for (var j = 0; j < n; j++) {
        // console.log('checking', j, i);
        if (homework[j][i] && homework[j][i] !== ' ') {
          // console.log(operands[i - start], homework[j][i]);
          operands[i - start] *= 10;
          operands[i - start] += Number(homework[j][i]);
        }
      }
    }
    // console.log(operands);
    // console.log(op);
    // console.log('******');
    // * or + operands
    if (op === '+') {
      return sum(operands);
    } else if (op === '*') {
      return product(operands);
    } else {
      return 0;
    }
  }
  const numColumns = homework[n].length;
  let start;
  let end;
  // iterate for as many columns there are
  for (let i = 0; i < numColumns; i++) {
    // find bounds (start to 1 before last space)
    start = i;
    end = i + 1;
    while (homework[n][end] === ' ') {
      end++;
    }
    // remove separator space
    end--;
    // problem: start inclusive to end exclusive
    // add answer to total
    // total += solve(i);
    if (start !== end) {
      let problemAns = solve(start, end);
      total += problemAns;
    }

    i = end;
  }
  // last problem
  // find length of longest row and use it as end bound
  let problemAns = solve(start, length);
  total += problemAns;

  // return total
  return total;
}
function solutionp1(homework) {
  // number of operands in each problem = total lines - 1
  // number of problems = number of operation symbols on last line of input
  const n = homework.length - 1;
  // console.log(homework);
  homework = homework.map(line => line.trim().split(/\s+/));
  let numProblems = homework[n].length;
  // console.log(homework);
  // console.log('num Problems', numProblems);

  // does every problem have same number of operands? A: it seems so
  // let probs = new Set();
  // homework.forEach((line) => {
  //   probs.add(line.length);
  // });
  // console.log(probs);

  // total
  let total = 0;
  // helper solve(column)
  function solve(column) {
    // find operation
    const op = homework[n][column];
    // define answer
    let ans = Number(homework[0][column]);
    // console.log(ans);
    // +
    if (op === '+') {
      // iterate for as many operands there are (total lines - 1)
      for (let i = 1; i < n; i++) {
        // console.log(homework[i][column]);
        // add to answer
        ans += Number(homework[i][column]);
      }
      // console.log('sums to');
    } else {
      // *
      for (let i = 1; i < n; i++) {
        // console.log(homework[i][column]);
        // multiply answer by
        ans *= Number(homework[i][column]);
      }
      // console.log('multiplies to');
    }
    // return answer
    // console.log(ans);
    return ans;
  }
  // iterate for as many problems there are
  for (let i = 0; i < numProblems; i++) {
    // add answer to total
    total += solve(i);
  }

  // return total
  return total;
}

module.exports = solution;