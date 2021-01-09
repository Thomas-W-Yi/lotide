const log = console.log;
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
    if (Array.isArray(array1[i]) && Array.isArray(array2[i])) {
      if (eqArrays(array1[i], array2[i]) === false) {
        return false;
      }
    } else if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
// => true
log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
// => false
log(eqArrays([[2, 3], [4]], [[2, 3], 4]));
// => false