// const assertEqual = function (actual, expected) {
//   let fail = '🛑',
//     pass = '✅';
//   console.log(
//     actual === expected
//       ? `${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`
//       : `${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`
//   );
// };

const countLetters = (string, letter) => {
  let result = {};
  for (let letter of string) {
    result[letter] ? result[letter]++ : (result[letter] = 1);
  }
  return result[letter];
};

// assertEqual(countLetters('LHL', 'L), 2);
module.exports = countLetters;