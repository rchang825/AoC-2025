// ex: 50 -> L68 = 50 - 68 = -18 % 100 = 82
// L30 = 82 - 30 = 52 % 100 = 52
// R48 = 52 + 48 = 100 % 100 = 0 <- increment password

function solutionp1(rotation, curr = 50, password = 0) {
  // the dial is a cycle from 0-99
  // apply rotation based on direction and degrees:
  // direction = first character ('R' or 'L')
  const right = rotation.charAt(0) === 'R';
  // degrees = rest of string (all digits)
  const degrees = Number(rotation.substring(1));
  // new position = curr + or - degrees, % 100
  if (right) {
    curr += degrees;
  } else {
    curr -= degrees;
  }
  curr %= 100;
  // convert negative numbers to positive
  if (curr < 0) {
    curr += 100;
  }
  // console.log('new curr after', rotation, 'is', curr);
    // if the new position is 0
  if (curr === 0) {
    // increment password counter
    password++;
  }
  // return new position and password
  return [curr, password];
};

function solution(rotation, curr = 50, password = 0) {
  // the dial is a cycle from 0-99
  // apply rotation based on direction and degrees:
  // direction = first character ('R' or 'L')
  // console.log('start:', curr, 'rotated', rotation);
  const right = rotation.charAt(0) === 'R';
  const degrees = Number(rotation.substring(1));
  const start = curr;
  // passes = number of times rotations pass 0
  let passes = 0;
  // get fake new position by updating curr by degrees
  if (right) {
    curr += degrees;
  } else {
    // if result will be negative
    if (degrees > curr && start !== 0) {
      // takes one pass to convert from negative to positive
      passes++;
    }
    curr -= degrees;
  }
  // console.log('intermediate', curr);
  // update if curr lands on 0 as well
  if (curr === 0) {
    passes++;
  }
  // check how many passes during the rotation
  passes += Math.abs(Math.trunc(curr / 100));
  // add to password
  // console.log('passes or lands on 0', passes, 'times');
  password += passes;
  // update curr by % 100 and + 100 if negative
  curr %= 100;
  if (curr < 0) {
    curr += 100;
  }
  // console.log('end:', curr);
  // console.log('********************');
  // return new curr and password
  return [curr, password];
};

module.exports = solution;