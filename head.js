const assertEqual = (actual, expected) => {
  let fail = '🛑',
    pass = '✅';
  console.log(
    actual === expected
      ? `${pass}${pass}${pass}Assertion Passed: ${actual} === ${expected}`
      : `${fail}${fail}${fail}Assertion Failed: ${actual} !== ${expected}`
  );
};

const head = (array) => {
  return array[0];
};

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
