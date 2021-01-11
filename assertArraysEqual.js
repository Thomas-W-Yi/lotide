const eqArrays = require('./eqArrays');

const assertArraysEqual = (a1, a2) => {
  let fail = '🛑',
    pass = '✅';
  return eqArrays(a1, a2)
    ? `${pass}${pass}${pass}Assertion Passed: [${a1}] === [${a2}]`
    : `${fail}${fail}${fail}Assertion Failed: [${a1}] !== [${a2}]`;
};

module.exports = assertArraysEqual;

