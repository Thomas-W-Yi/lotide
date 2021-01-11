const assert = require('chai').assert;
const tail = require('../tail');

describe('#tail', () => {
  it('return [1,2,3,4,5] for [0,1,2,3,4,5]', () => {
    assert.deepEqual(tail([0, 1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
  });
});
