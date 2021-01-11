const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const reverse = require('./reverse');
const map = require('./map');
const without = require('./without');
const flatten = require('./flatten');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const takeUntil = require('./takeUntil');
const letterPositions = require('./letterPositions');

module.exports = {
  head: head,
  tail: tail,
  middle: middle,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  reverse: reverse,
  map: map,
  without: without,
  flatten: flatten,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  countLetters: countLetters,
  countOnly: countOnly,
  takeUntil: takeUntil,
  letterPositions: letterPositions
};