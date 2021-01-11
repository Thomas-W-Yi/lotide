const findKey = (obj, callback) => {
  for (let key of Object.keys(obj)) {
    if (callback(obj[key])) {
      return key;
    }
  }
};
// let key = findKey(
//   {
//     'Blue Hill': { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// );

// console.log(key);

// const assertEqual = function (actual, expected) {
//   let fail = '🛑',
//     pass = '✅';
//   console.log(
//     actual === expected
//       ? `${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`
//       : `${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`
//   );
// };
// // TEST CODE
// assertEqual(key, 'noma');

module.exports = findKey;