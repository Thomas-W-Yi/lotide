const assert = require('chai').assert.deepEqual;
const letterPositions = require('../letterPositions');

describe('#letterPositions', () => {
  it("return {'l': [0], 'i': [1, 11], 'g': [2], 'h': [3, 5, 15, 18], 't': [4, 14], 'o': [6, 19], 'u': [7, 20], 's': [8, 21], 'e': [9, 16, 22], 'n': [12]} for 'lighthouse in the house'", () => {
    const expect = { 'l': [0], 'i': [1, 11], 'g': [2], 'h': [3, 5, 15, 18], 't': [4, 14], 'o': [6, 19], 'u': [7, 20], 's': [8, 21], 'e': [9, 16, 22], 'n': [12] };
    assert(letterPositions('lighthouse in the house'), expect);
  });
});

