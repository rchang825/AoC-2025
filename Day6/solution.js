function solution(homework) {
  // number of operands in each problem = total lines - 1
  // number of problems = number of operation symbols on last line of input
  const n = homework.length - 1;
  // console.log(homework);
  homework = homework.map(line => line.split(''));
  let numProblems = 0;
  homework[n].forEach((ch) => { if (ch !== ' ') {
      numProblems++;
    }
  });
  // console.log(homework);
  // console.log('num Problems', numProblems);
  // total
  let total = 0;
  // helper solve(column)
  function solve(column) {
    // find operation
    const op = homework[n][column];
    // define answer
    // start from the bottom (n - 1 row)
    //
    // return answer
    return ans;
  }
  // iterate for as many problems there are
  for (let i = 0; i < numProblems; i++) {
    // add answer to total
    // total += solve(i);
  }

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