const assert = require('chai').assert.strictEqual;
const head = require('../head');

describe("#head", () => {
  it("returns 5 for [5, 6, 7]", () => {
    assert(head([5, 6, 7]), 5);
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert(head(['Hello', 'Lighthouse', 'Labs']), 'Hello');
  });
});