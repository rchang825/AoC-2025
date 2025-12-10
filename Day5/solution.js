function solution(db) {
  // separate into ranges and available ingredients
  // should be separated by an empty element
  // join into string with ',' delimiter and separate again with ',,' as delim
  // [ranges, ingredients]
  // console.log('db', db);
  [intervals, ingredients] = db.join(',').split(',,');
  intervals = intervals.split(',');
  ingredients = ingredients.split(',');
  // console.log('intervals', intervals);
  // console.log('ingredients', ingredients);

  // mergeIntervals
  function mergeIntervals() {
    // sorts and merges intervals
    // sort by non-descending start and non-descending end range
    function asc(a, b) {
      // a and b are ranges [start]-[end]
      let [aStart, aEnd] = a.split('-').map((n) => Number(n));
      let [bStart, bEnd] = b.split('-').map((n) => Number(n));
      // console.log('comparing', a, 'to', b);
      // a comes before b if a[start] < b[start]
      if (aStart < bStart) {
        // console.log(a, 'comes before!');
        // return -1
        return -1;
      }
      // otherwise return 1
      // console.log(a, 'comes after!');
      return 1;
    }
    intervals.sort(asc);
    // console.log('sorted intervals', intervals);
    // define merged intervals variable
    let merged = [];
    // iterates through intervals
    let i = 0;
    while (i < intervals.length) {
      // reset start, end if necessary
      let [start, end] = intervals[i].split('-').map((n) => Number(n));
      // console.log('new start and end', start, end);
      // while next interval starts with a number <= end of current interval
      while (i < intervals.length - 1 && intervals[i + 1].split('-')[0] <= end) {
        // console.log('merging curr', start, '-', end, 'with next');
        // current interval's end = max
        end = Math.max(end, Number(intervals[i + 1].split('-')[1]));
        i++;
      }
      // add new interval
      // console.log('adding interval curr', start, '-', end);
      merged.push(start + '-' + end);
      i++;
    }
    intervals = merged;
  }
  // console.log('before',  intervals);
  // call mergeIntervals
  mergeIntervals();
  // console.log('merged intervals',  intervals);

  // helper(n)
  function isFresh(n) {
    // returns 1 if n falls in an interval
    for (var i = 0; i < intervals.length; i++) {
      let interval = intervals[i].split('-').map((n) => Number(n));
      if (n >= interval[0] && n <= interval[1]) {
        // console.log(n, 'is fresh!');
        return 1;
      }
    }
    // console.log(n, 'is spoiled');
    return 0;
  }
  // define count
  let count = 0;
  // for each ingredient
  ingredients.forEach((ing) => {
    count += isFresh(Number(ing));
  })
    // add helper(ingredient) to count
  // return count
  return count;
}

module.exports = solution;