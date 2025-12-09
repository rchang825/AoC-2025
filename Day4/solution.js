function solution(map) {
  // helper which is solutionp1 + modifies @ to x when unobstructed, and returns a number
  // convert map to 2d array
  map = map.map((row) => {
    return row.split('')
  });
  function processPapers(map) {
    // console.log(map);
    // define m and n
    let M = map.length;
    let N = map[0].length;
    // helper(r, c)
    function helper(r, c) {
      // returns 0 if out of bounds
      if (r < 0 || r >= M || c < 0 || c >= N) {
        return 0;
      }
      // returns if paper
      return map[r][c] === '@';
    }
    // define res
    let res = 0;
    let blockers = 0;
    // iterate through rolls of paper (@)
    for (var r = 0; r < M; r++) {
      for (var c = 0; c < N; c++) {
        // if used paper
        if (map[r][c] === 'x') {
          // delete
          map[r][c] = '.';
        }
        // if paper
        if (map[r][c] === '@') {
          // get summation of helper(8 directions)
          // top left = r - 1, c - 1
          // top = r - 1, c
          // top right = r - 1, c + 1
          // left = r, c - 1
          // right = r, c + 1
          // bottom left = r + 1, c - 1
          // bottom = r + 1, c
          // bottom right = r + 1, c + 1
          blockers = helper(r - 1, c - 1) +
            helper(r - 1, c) +
            helper(r - 1, c + 1) +
            helper(r, c - 1) +
            helper(r, c + 1) +
            helper(r + 1, c - 1) +
            helper(r + 1, c) +
            helper(r + 1, c + 1);
          // console.log('number of forklifts in 8 adj positions:', blockers);
          // if <= 3
          if (blockers <= 3) {
            // change paper to "used paper"
            map[r][c] = 'x';
            // res++
            res++;
          }
        }
      }
    }
    // return res
    return res;
  }
  // papers = call helper
  let papers = processPapers(map);
  // define res
  let res = 0;
  // while number is not 0
  while (papers !== 0) {
    // add to res
    res += papers;
    // update papers with the result of calling helper again
    papers = processPapers(map);
  }
  // return res
  return res;
}

function solutionp1(map) {
  // convert map to 2d array
  map = map.map((row) => {
    return row.split('')
  });
  // console.log(map);
  // define m and n
  let M = map.length;
  let N = map[0].length;
  // helper(r, c)
  function helper(r, c) {
    // returns 0 if out of bounds
    if (r < 0 || r >= M || c < 0 || c >= N) {
      return 0;
    }
    // returns if paper
    return map[r][c] === '@';
  }
  // define res
  let res = 0;
  let blockers = 0;
  // iterate through rolls of paper (@)
  for (var r = 0; r < M; r++) {
    for (var c = 0; c < N; c++) {
      // if paper
      if (map[r][c] === '@') {
        // get summation of helper(8 directions)
        // top left = r - 1, c - 1
        // top = r - 1, c
        // top right = r - 1, c + 1
        // left = r, c - 1
        // right = r, c + 1
        // bottom left = r + 1, c - 1
        // bottom = r + 1, c
        // bottom right = r + 1, c + 1
        blockers = helper(r - 1, c - 1) +
          helper(r - 1, c) +
          helper(r - 1, c + 1) +
          helper(r, c - 1) +
          helper(r, c + 1) +
          helper(r + 1, c - 1) +
          helper(r + 1, c) +
          helper(r + 1, c + 1);
        // console.log('number of forklifts in 8 adj positions:', blockers);
        // if <= 3
        if (blockers <= 3) {
          // res++
          res++;
        }
      }
    }
  }
  // return res
  return res;
}

module.exports = solution;