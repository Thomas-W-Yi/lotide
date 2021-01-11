// const assertEqual = function (actual, expected) {
//   let fail = '🛑',
//     pass = '✅';
//   console.log(
//     actual === expected
//       ? `${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`
//       : `${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`
//   );
// };

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  let keys = Object.keys(itemsToCount);

  let newKeys = keys.filter((key) => {
    return itemsToCount[key];
  });

  let countItems = allItems.filter((x) => {
    return newKeys.includes(x);
  });
  console.log(countItems);
  let result = {};
  countItems.map((y) => {
    result[y] ? result[y]++ : (result[y] = 1);
  });
  console.log(result);
  return result;
};
// const firstNames = [
//   'Karl',
//   'Salima',
//   'Agouhanna',
//   'Fang',
//   'Kavith',
//   'Jason',
//   'Salima',
//   'Fang',
//   'Joe',
// ];

// const result1 = countOnly(firstNames, {
//   Jason: true,
//   Karima: true,
//   Fang: true,
//   Agouhanna: false,
// });

// assertEqual(result1['Jason'], 1);
// assertEqual(result1['Karima'], 3);
// assertEqual(result1['Fang'], 2);
// assertEqual(result1['Agouhanna'], undefined);
module.exports = countOnly;