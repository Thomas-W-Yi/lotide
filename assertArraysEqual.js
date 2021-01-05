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
console.log(assertArraysEqual([1, 2, 4], [1, 2, 3]));
