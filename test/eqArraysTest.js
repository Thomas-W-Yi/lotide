const log = console.log;
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

log(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
// => true
log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]));
// => false
log(eqArrays([[2, 3], [4]], [[2, 3], 4]));
// => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS