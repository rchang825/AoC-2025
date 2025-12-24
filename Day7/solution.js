function solution(diagram) {
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