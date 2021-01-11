const assert = require('chai').assert.deepEqual;
const findKeyByValue = require('../findKeyByValue');

describe('#findKeyByValue', () => {
  it("return 'drama' for {sci_fi: 'The Expanse',comedy: 'Brookly Nine-Nine',drama: 'The Wire'} with movie name 'The Wire'", () => {
    const bestTVShowsByGenre = { sci_fi: 'The Expanse', comedy: 'Brookly Nine-Nine', drama: 'The Wire' };
    assert(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });
  it("return 'undefined' for {sci_fi: 'The Expanse',comedy: 'Brookly Nine-Nine',drama: 'The Wire'} with movie name 'That '70s Show'", () => {
    const bestTVShowsByGenre = { sci_fi: 'The Expanse', comedy: 'Brookly Nine-Nine', drama: 'The Wire' };
    assert(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});