const takeUntil = function (array, callback) {
  let output = [];
  for (let x of array) {
    if (callback(x)) {
      return output;
    } else {
      output.push(x);
    }
  }
  return output;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log('---');

const data2 = [
  "I've",
  'been',
  'to',
  'Hollywood',
  ',',
  "I've",
  'been',
  'to',
  'Redwood',
];
const results2 = takeUntil(data2, (x) => x === ',');
console.log(results2);

// test code

const eqArrays = (array1, array2) => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (a1, a2) => {
  let fail = '🛑',
    pass = '✅';
  return eqArrays(a1, a2)
    ? `${pass}${pass}${pass}Assertion Passed: ${a1} === ${a2}`
    : `${fail}${fail}${fail}Assertion Failed: ${a1} !== ${a2}`;
};
console.log(
  assertArraysEqual(
    takeUntil(data1, (x) => x < 0),
    [1, 2, 5, 7, 2]
  )
);
console.log(
  assertArraysEqual(
    takeUntil(data2, (x) => x === ','),
    ["I've", 'been', 'to', 'Hollywood']
  )
);
