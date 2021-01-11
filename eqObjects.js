// const log = console.log;
// const assertEqual = function (actual, expected) {
//   let fail = '🛑',
//     pass = '✅';
//   console.log(
//     actual === expected
//       ? `${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`
//       : `${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`
//   );
// };

const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  } else {
    for (let key of keys1) {
      if (
        Array.isArray(object1[key]) &&
        Array.isArray(object2[key])
      ) {
        if (eqArrays(object1[key], object2[[key]]) === false) {
          return false;
        }
      } else if (typeof(object1[key]) === 'object' && typeof(object1[key]) === 'object') {
        if (eqObjects(object1[key], object2[key]) === false) {
          return false;
        }
      } else if (object1[key] !== object2[[key]]) {
        return false;
      }
    }
    return true;
  }
};

// const ab = { a: '1', b: '2' };
// const ba = { b: '2', a: '1' };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: '1', b: '2', c: '3' };
// eqObjects(ab, abc); // => false
// console.log(eqObjects(ab, abc));

// const cd = { c: '1', d: ['2', 3] };
// const dc = { d: ['2', 3], c: '1' };
// eqObjects(cd, dc); // => true
// console.log(eqObjects(cd, dc));
// const cd2 = { c: '1', d: ['2', 3, 4] };
// // => false
// console.log(eqObjects(cd, cd2));
// assertEqual(eqObjects(ab, abc), true);
// assertEqual(eqObjects(ab, abc), false);
// log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
// log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false
module.exports = eqObjects;