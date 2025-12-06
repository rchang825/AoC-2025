function solutionp1(range) {
  // console.log('range', range);
  const [min, max] = range.split('-');
  // console.log('min:', min, 'max:', max);
  // if min and max are both odd lengths, no answer can be found
  if (min.length % 2 === 1 && max.length % 2 === 1) {
    // console.log('no possibility of invalid ids for range', range);
    return 0;
  }
  // console.log('considering range', range);
  // define res
  let res = 0;
  // use strings
  // define curr = min range value
  let curr = min;
  // if min is odd, make it "even"
  if (curr.length % 2 === 1) {
    // curr = 10^curr.length
    curr = 10 ** curr.length + '';
  }
  // curr = first half
  let half = curr.substring(0, curr.length / 2);
  // loop while curr duped < max
  curr = Number(half + half);
  while (curr <= Number(max)) {
    // console.log('considering curr', curr);
    // if curr is >= min
    if (curr >= Number(min)) {
      // console.log('curr within range', curr);
      // add curr to res (convert to number)
      res += curr;
    } else {
      // console.log(curr, 'is too small!');
    }
    // generate new curr: next smallest is to increment the last of half
    // ex: 100,100 -> 101,101
    // handle 9 -> 10
    half = Number(half) + 1 + '';
    curr = Number(half + half);
  }
  // console.log('*****************');
  // return res
  return res;
}

// instead of just halves, can be any single number repeated n.length times, or any two numbers repeated n.length / 2 times, or any three numbers repeated n.length / 3 times, and so on as long as n.length / x > 1 (repeats at least once)

// brute force iterate from min to max inclusive
// pattern can be
// -- * digits in n / x, x = 2
// --- * digits in n / x, x = 3
// so long as digits in n % x = 0

function isInvalid(id) {
  // console.log('checking', id);
  // save length of id
  let length = id.length;
  // define x
  let x = 2;
  // outer loop from x = 2 to x = length
  while (x <= length) {
    // if x divides evenly into length
    // console.log('looking for segment repeating', x, 'times');
    if (length % x === 0) {
      // set pointer = length / x
      // must be whole number at this point
      let pointer = length / x;
      // set curr = 0
      let curr = 0;
      // loop until pointer gets to end of string
      while (pointer < length) {
        // if id[curr] doesn't match id[pointer]
        // console.log(`id[curr]: ${id[curr]} id[pointer]: ${id[pointer]}`);
        if (id[curr] !== id[pointer]) {
          // console.log('no match, attempting next...');
          // break from inner while loop
          break;
        }
        // otherwise, increment both
        curr++;
        pointer++;
      }
      // return true if pointer got to end of string
      if (pointer === length) {
        // console.log('found a sequence repeated', x, 'times in', id);
        return true;
      }
    }
    // next x
    x++;
  }
  // console.log('************');
  // return false if nothing returned early
  return false;
}
function solution(range) {
  // console.log('range', range);
  const [min, max] = range.split('-');
  // console.log('considering range min:', min, 'max:', max);
  // define res
  let res = 0;
  // iterate over range
  for (var i = parseInt(min); i <= parseInt(max); i++) {
    // console.log('curr', i);
    // if string has repeat sequence
    if (isInvalid(i + '')) {
      // add to res
      res += i;
    }
  }
  return res;
}
module.exports = solution;