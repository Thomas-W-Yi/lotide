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
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function (object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let result;
  keys1.filter((key1) => {
    return !keys2.includes(key1);
  }).length && keys1.length === keys2.length
    ? (result = false)
    : (result = true);
  if (result === false) {
    return result;
  } else {
    for (let i = 0; i < keys1.length; i++) {
      if (object1[keys1[i]].length === 1) {
        object1[keys1[i]] === object2[[keys1[i]]] ? result : (result = false);
      } else if (
        Array.isArray(object1[keys1[i]]) &&
        Array.isArray(object2[keys1[i]])
      ) {
        result = eqArrays(object1[keys1[i]], object2[[keys1[i]]]);
      } else if (
        typeof object1[keys1[i]] === 'object' &&
        object1[keys1[i]] !== 'null' &&
        typeof object2[keys1[i]] === 'object' &&
        object2[keys1[i]] !== 'null'
      ) {
        result = eqObjects(object2[keys1[i]], object2[keys1[i]]);
      }
    }
  }
  return result;
};

const ab = { a: '1', b: '2' };
const ba = { b: '2', a: '1' };
eqObjects(ab, ba); // => true

const abc = { a: '1', b: '2', c: '3' };
eqObjects(ab, abc); // => false

assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
