const assertEqual = function (actual, expected) {
  let fail = '🛑',
    pass = '✅';
  console.log(
    actual === expected
      ? `${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`
      : `${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`
  );
};

const countLetters = (string) => {
  let result = {};
  for (let letter of string) {
    result[letter] ? result[letter]++ : (result[letter] = 1);
  }
  return result;
};

// assertEqual(countLetters('LHL')['L'], 2);
module.exports = countLetters;