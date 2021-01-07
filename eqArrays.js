const assertEqual = function (actual, expected) {
  let fail = '🛑',
    pass = '✅';
  console.log(
    actual === expected
      ? `${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`
      : `${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`
  );
};
const eqArrays = (array1, array2) => {
  let len = array1.length > array2.length ? array1.length : array2.length;
  for (let i = 0; i < len; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(['1', '2', '3'], ['1', '2', '3'])); // => true
console.log(eqArrays(['1', '2', '3'], ['1', '2', 3])); // => f

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
