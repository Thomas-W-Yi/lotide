const assertEqual = (actual, expected) => {
  let fail = '🛑',
    pass = '✅',
    len = actual.length > expected.length ? actual.length : expected.length;

  for (let i = 0; i < len; i++) {
    if (actual[i] !== expected[i]) {
      return `${fail}${fail}${fail}Assertion Failed: [${actual}] !== [${expected}]`;
    }
  }

  return `${pass}${pass}${pass}Assertion Passed: [${actual}] === [${expected}]`;
};

const tail = (array) => {
  let a, rest;
  [a, ...rest] = array;
  return rest;
};

console.log(assertEqual(tail([0, 1, 2, 3, 4]), [1, 2, 3, 4, 5]));

const words = ['Yo Yo', 'Lighthouse', 'Labs'];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3));
