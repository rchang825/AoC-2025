function solution(diagram) {
  // define timelines
  let timelines = 0n;
  const n = diagram.length;
  const m = diagram[0].length;
  const dp = new Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = new BigInt64Array(m).fill(0n);
  }
  // console.log(dp);
  // start curr with first option after S
  const start = diagram[0].indexOf('S');
  dp[1][start] = 1n;
  // console.log(dp[0].join(' '));
  // console.log(dp[1].join(' '));
  for (var r = 2; r < n; r++) {
    for (var c = 0; c < m; c++) {
      // splitter
      if (diagram[r][c] === '^') {
        // try to split
        if (c > 0) {
          if (dp[r - 1][c] !== 0) {
            dp[r][c - 1] += dp[r - 1][c];
          }
        }
        if (c < m - 1) {
          if (dp[r - 1][c] !== 0) {
            dp[r][c + 1] += dp[r - 1][c];
          }
        }
      } else if (dp[r - 1][c] !== 0) {
        // cascade
        dp[r][c] += dp[r - 1][c];
      }
    }
    // console.log(dp[r].join(' '));
  }
  // console.log('********');
  // console.log(dp[n - 1]);
  // sum up last row
  dp[n - 1].forEach((el) => {
    if (el !== 0) {
      timelines += el;
    }
  });
  // return timelines
  return timelines;
}

function solutionTLE(diagram) {
  // define timelines
  let timelines = 0;
  const n = diagram.length;
  const m = diagram[0].length;
  // start curr with first option after S
  const start = diagram[0].indexOf('S');
  diagram[1][start] = '|';
  // console.log(diagram);
  function helper(diagram, row) {
    // if at last row
    if (row === n) {
      // increment timelines
      // console.log('timeline found');
      // console.log(diagram);
      // console.log('**********');
      timelines++;
      // return
      return;
    }
    // otherwise,
      // recurse on all splitter options (updated curr, row = 1)
    for (var c = 0; c < n; c++) {
      if (diagram[row - 1][c] === '|') {
        if (diagram[row][c] === '^') {
          if (c > 0) {
            diagram[row][c - 1] = '|';
            helper(diagram, row + 1);
            diagram[row][c - 1] = '.';
          }
          if (c < m - 1) {
            diagram[row][c + 1] = '|';
            helper(diagram, row + 1);
            diagram[row][c + 1] = '.';
          }
        } else {
          diagram[row][c] = '|';
          helper(diagram, row + 1);
          diagram[row][c] = '.';
        }
      }
    }
  }
  // console.log(diagram);
  helper(diagram, 2);
  // return timelines
  return timelines;
}

function solutionp1(diagram) {
  // console.log(diagram);
  // define splits
  let splits = 0;
  const n = diagram.length;
  const m = diagram[0].length;
  // iterate through diagram line by line
  for (let r = 1; r < n; r++) {
    // character by character

    for (let c = 0; c < m; c++) {
      // prev
      let prev = diagram[r - 1][c];
      // if prev = S or beam
      if (prev === 'S' || prev === '|') {
        // modify diagram with | if not splitter
        if (diagram[r][c] !== '^') {
          diagram[r][c] = '|';
        }
      }
      // if beam is splitting
      if (diagram[r][c] === '^' && diagram[r - 1][c] === '|') {
        // splits++ there is beam above splitter
        splits++;
        // split
        if (c > 0) {
          diagram[r][c - 1] = '|';
        }
        if (c < m - 1) {
          diagram[r][c + 1] = '|';
        }
      }
    }
    // console.log('row', r);
    // console.log(diagram);
    // console.log('splits', splits);
    // console.log('***********');
  }
  // return splits
  return splits;
}

module.exports = solution;