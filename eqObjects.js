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

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let i = 0; i < keys1.length; i++) {
      if (
        Array.isArray(object1[keys1[i]]) &&
        Array.isArray(object2[keys1[i]])
      ) {
        if (eqArrays(object1[keys1[i]], object2[[keys1[i]]]) === false) {
          return false;
        }
      } else if (object1[keys1[i]] !== object2[[keys1[i]]]) {
        return false;
      }
    }
    return true;
  }
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: '1', b: '2', c: '3' };
eqObjects(ab, abc); // => false
console.log(eqObjects(ab, abc));

const cd = { c: '1', d: ['2', 3] };
const dc = { d: ['2', 3], c: '1' };
eqObjects(cd, dc); // => true
console.log(eqObjects(cd, dc));
const cd2 = { c: '1', d: ['2', 3, 4] };
// => false
console.log(eqObjects(cd, cd2));
assertEqual(eqObjects(ab, abc), true);
assertEqual(eqObjects(ab, abc), false);
