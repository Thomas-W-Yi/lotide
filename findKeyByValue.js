// const assertEqual = function (actual, expected) {
//   let fail = '🛑',
//     pass = '✅';
//   console.log(
//     actual === expected
//       ? `${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`
//       : `${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`
//   );
// };

const findKeyByValue = (object, name) => {
  let keys = Object.keys(object);
  let value = [];
  keys.map((key) => {
    value.push(object[key]);
  });
  return keys[value.indexOf(name)];
};

// const bestTVShowsByGenre = {
//   sci_fi: 'The Expanse',
//   comedy: 'Brooklyn Nine-Nine',
//   drama: 'The Wire',
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
module.exports = findKeyByValue;