const assert = require('chai').assert.deepEqual;
const countOnly = require('../countOnly');

describe('#countOnly', () => {
  it('return {Jason: 1, Salima: 3, Fang: 2} for ["Karl", "Salima", "Agouhanna", "Fang", "Salima", "Jason", "Salima", "Fang", "Joe"]', () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Salima", "Jason", "Salima", "Fang", "Joe"];
    const countObj = {
      Jason: true,
      Salima: true,
      Fang: true,
      Agouhanna: false,
    };
    const expected = { Jason: 1, Salima: 3, Fang: 2};
    assert(countOnly(firstNames, countObj), expected);
  });
});