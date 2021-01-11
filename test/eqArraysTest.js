const eqArrays = require('../eqArrays');
const assert = require('chai').assert.strictEqual;

describe('#eqArrays', () => {
  it('return true for [[2, 3], [4]] and [[2, 3], [4]]', () => {
    assert(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });
  it('return true for [[2, 3], [4]] and [[2, 3], [4, 5]]', () => {
    assert(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
  it('return true for [[2, 3], [4]] and [[2, 3], [4]]', () => {
    assert(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});
// const assert = require('chai').assert.str;

// log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
// // => true
// log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
// // => false
// log(eqArrays([[2, 3], [4]], [[2, 3], 4]));
// // => false

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS