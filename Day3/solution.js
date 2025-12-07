// 987654321111111
// fix 9 as first
//
function solutionp1(bank) {
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
function helper(bank, i, max) {
  let best = -1;
  let index = i;
  // find where the maximum number lies
  for (var i = i; i < max; i++) {
      // set curr
      let curr = Number(bank[i]);
      // if curr is better
      if (curr > best) {
        // update best and index
        best = curr;
        index = i;
      }
  }
  return index;
}

function solution(bank) {
  // save size of bank
  let size = bank.length;
  // define array of voltages from batteries to turn on
  let res = [];
  // iterate through bank batteries to find indices of batteries
  let first = helper(bank, 0, size - 11);
  let second = helper(bank, first + 1, size - 10);
  let third = helper(bank, second + 1, size - 9);
  let fourth = helper(bank, third + 1, size - 8);
  let fifth = helper(bank, fourth + 1, size - 7);
  let sixth = helper(bank, fifth + 1, size - 6);
  let seventh = helper(bank, sixth + 1, size - 5);
  let eighth = helper(bank, seventh + 1, size - 4);
  let ninth = helper(bank, eighth + 1, size - 3);
  let tenth = helper(bank, ninth + 1, size - 2);
  let eleventh = helper(bank, tenth + 1, size - 1);
  let twelvth = helper(bank, eleventh + 1, size);

  // sum all batteries from indices as a string
  // console.log('indices:', first, second, third, fourth, fifth, sixth, seventh, eighth, ninth, tenth, eleventh, twelvth);
  return Number([bank[first], bank[second], bank[third], bank[fourth], bank[fifth], bank[sixth], bank[seventh], bank[eighth], bank[ninth], bank[tenth], bank[eleventh], bank[twelvth]].join(''));
}
module.exports = solution;