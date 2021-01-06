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

const middle = (array) => {
  if (array.length <= 2) {
    return [];
  } else {
    return array.length % 2 === 0
      ? [array[array.length / 2 - 1], array[array.length / 2]]
      : [array[(array.length - 1) / 2]];
  }
};
console.log(assertArraysEqual(middle([1, 2, 3]), [2]));
console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]));
