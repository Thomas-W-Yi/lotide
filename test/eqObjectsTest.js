const assert = require('chai').assert.strictEqual;
const eqObjects = require('../eqObjects');

describe('#eqObjects', () => {
  it("return true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    const cd = { c: '1', d: ['2', 3] };
    const dc = { d: ['2', 3], c: '1' };
    assert(eqObjects(cd, dc), true);
  });
  it("return false for { c: '1', d: ['2', 3] } and { c: '1', d: ['2', 3, 4] }", () => {
    const cd = { c: '1', d: ['2', 3] };
    const cd2 = { c: '1', d: ['2', 3, 4] };
    assert(eqObjects(cd, cd2), false);
  });
  it("return true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    const cd = { a: { y: 0, z: 1 }, b: 2 };
    const dc = { a: { y: 0, z: 1 }, b: 2 };
    assert(eqObjects(cd, dc), true);
  });
  it("return true for { c: '1', d: ['2', 3] } and { d: ['2', 3], c: '1' }", () => {
    const cd = { a: { y: 0, z: 1 }, b: 2 };
    const dc = { a: 1, b: 2 };
    assert(eqObjects(cd, dc), false);
  });
});