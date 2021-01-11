const map = (array, callback) => {
  let output = [];
  for (let string of array) {
    output.push(callback(string));
  }
  return output;
};


// // test code
// const words = ['ground', 'control', 'to', 'major', 'tom'];
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
// console.log(
//   assertArraysEqual(
//     map(words, (word) => word[0]),
//     ['g', 'c', 't', 'm', 't']
//   )
// );

module.exports = map;
