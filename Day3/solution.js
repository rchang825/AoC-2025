// 987654321111111
// fix 9 as first
//
function solution(bank) {
  // define first and second batteries to turn on
  let first = -1;
  let second = -1;
  // define array of contenders
  let contenders = [];
  // iterate through bank batteries
  for (var i = 0; i < bank.length - 1; i++) {
    // set curr
    let curr = Number(bank[i]);
    // if curr is a viable contender for first
    if (curr > first) {
      // update first
      first = curr;
      // for each battery after first
      for (var j = i + 1; j < bank.length; j++) {
        // update second as necessary
        second = Math.max(second, Number(bank[j]));
      }
      // console.log('contender', first, 'and', second);
      // add contenders to array
      contenders.push(Number(first.toString() + second.toString()));
      // reset second
      second = -1;
    }
  }
  // console.log('contenders', contenders);
  // return best contender (max)
  return Math.max(...contenders, -1);
}

module.exports = solution;