// const eqArrays = (array1, array2) => {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i]) {
//       return false;
//     }
//   }
//   return true;
// };

// const assertArraysEqual = (a1, a2) => {
//   let fail = '🛑',
//     pass = '✅';
//   return eqArrays(a1, a2)
//     ? `${pass}${pass}${pass}Assertion Passed: [${a1}] === [${a2}]`
//     : `${fail}${fail}${fail}Assertion Failed: [${a1}] !== [${a2}]`;
// };

const without = (a1, a2) => {
  return a1.filter((x) => {
    return !a2.includes(x);
  });
};
// const words = ['hello', 'world', 'lighthouse'];
// console.log(without([1, 'cat', 3, 'dog', 1, 1], [1, 'dog', 2]));

// without(words, ['lighthouse']); // no need to capture return value for this test case
// console.log(without(words, ['lighthouse']));
// // Make sure the original array was not altered by the without function
// console.log(assertArraysEqual(words, ['hello', 'world', 'lighthouse']));
module.exports = without;